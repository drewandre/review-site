import React, { Component } from "react"
import SearchField from "../components/SearchField"
import SearchDropdown from "../components/SearchDropdown"
import { joinQuery } from "../helpers/SearchHelper"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      language: "",
      topic: "",
      onlyReviews: false,
      lastKeyPressedTime: 0,
      disableFields: true,
      searchError: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnlyReviews = this.handleOnlyReviews.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

  handleFormSubmit() {

    if(this.state.query.trim() != "") {

      this.props.loading(true);
      this.setState({ disableFields: false })

      if (Date.now() - this.state.lastKeyPressedTime > 1000) {

        let fullQuery = joinQuery(this.state.query, this.state.language, this.state.topic);

        fetch(`https://api.github.com/search/repositories${fullQuery}&sort=stars&order=desc`)
        .then(response => {
          if (response.ok) { return response; }
          else { throw new Error("Could not reach GitHub server!") }
        })
        .then(response => response.json())
        .then(body => {
          if(body.items != "") {
            this.props.handleSearch(body.items)
          } else {
            this.props.loading(false);
            this.setState({ searchError: true })
          }
        })
        .catch(error => this.props.error(error.message));
        this.props.loading(false);
      }
    } else {
      this.props.loading(false);
      this.setState({
        topic: "",
        language: "",
        onlyReviews: false,
        disableFields: true
      })
    }
  }

  handleSearch() {
    this.props.loading(true);
    this.props.handleSearch([]);
    this.setState({
      lastKeyPressedTime: Date.now(),
      searchError: false
    });
    setTimeout(() => this.handleFormSubmit(), 1000);
  }

  handleQuery(query) {
    this.setState({ query: query.target.value.toLowerCase() });
    this.handleSearch();
  }

  handleOnlyReviews() {
    console.log("onlyReviews: " + this.state.onlyReviews);
    this.handleSearch();
  }

  handleTopicChange(topic) {
    this.setState({ topic: topic.target.value.toLowerCase() })
    this.handleSearch();
  }

  handleLanguageChange(language) {
    this.setState({ language: language.target.value.toLowerCase() })
    this.handleSearch();
  }

  render() {

    let searchFieldClass = null;
    if(this.state.searchError) {
      searchFieldClass="error"
    } else {
      searchFieldClass="repo-search-bar"
    }

    return(
      <div id="search">
        <SearchField
          className={searchFieldClass}
          handlerFunction={this.handleQuery}
          placeholder="Search GitHub repositories"
        />
        <SearchDropdown
          disableField={this.state.disableFields}
          handleOnlyReviews={this.handleOnlyReviews}
          handleLanguageChange={this.handleLanguageChange}
          handleTopicChange={this.handleTopicChange}
          onlyReviews={this.state.onlyReviews}
          topic={this.state.topic}
          language={this.state.language}
        />
      </div>
    );
  }
}

export default SearchBar;
