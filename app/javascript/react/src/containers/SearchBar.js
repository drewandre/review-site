import React, { Component } from 'react'
import SearchField from '../components/SearchField'
import SearchDropdown from '../components/SearchDropdown'
import { joinQuery } from '../helpers/SearchHelper'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
<<<<<<< HEAD
      lastKeyPressedTime: 0
=======
      language: '',
      topic: '',
      onlyReviews: false,
      lastKeyPressedTime: 0,
      disableFields: true,
      searchError: false
>>>>>>> master
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnlyReviews = this.handleOnlyReviews.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

<<<<<<< HEAD
  handleFormSubmit(event) {
    event.preventDefault();
=======
  handleFormSubmit() {
>>>>>>> master

    if(this.state.query.trim() != '') {

      this.props.loading(true);
      this.setState({ disableFields: false })

      if (Date.now() - this.state.lastKeyPressedTime > 1000) {

<<<<<<< HEAD
        fetch(`http://api.github.com/search/repositories${joinedQuery}&sort=stars&order=desc`)
=======
        let fullQuery = joinQuery(this.state.query, this.state.language, this.state.topic);

        fetch(`http://api.github.com/search/repositories${fullQuery}&sort=stars&order=desc`)
>>>>>>> master
        .then(response => {
          if (response.ok) { return response; }
          else { throw new Error('Could not reach GitHub server!') }
        })
        .then(response => response.json())
        .then(body => {
          if(body.items != '') {
            this.props.handleSearch(body.items)
          } else {
            this.props.loading(false);
            this.setState({ searchError: true })
          }
        })
        .catch(error => this.props.error(error.message));
        this.props.loading(false);
      }
<<<<<<< HEAD
    }
  }

  handleOptions() {
    this.setState({ onlyReviews: !this.state.onlyReviews })
  }

  handleSearch(event) {
    this.props.handleSearch([])
    this.setState({ lastKeyPressedTime: Date.now() })
    if (this.validateSearch(event.target.value)) {
      this.setState({ query: event.target.value.toLowerCase() })
    }
    setTimeout(() => this.handleFormSubmit(event), 1000);
=======
    } else {
      this.props.loading(false);
      this.setState({
        topic: '',
        language: '',
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
>>>>>>> master
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
      searchFieldClass='error'
    } else {
      searchFieldClass='repo-search-bar'
    }

    return(
<<<<<<< HEAD
      <SearchField
        handlerFunction={this.handleSearch}
        placeholder="Search GitHub repositories"
      />
=======
      <div id='search'>
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
>>>>>>> master
    );
  }
}

export default SearchBar;
