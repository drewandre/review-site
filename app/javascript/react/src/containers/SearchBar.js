import React, { Component } from 'react'
import SearchField from '../components/SearchField'
import SearchDropdown from '../components/SearchDropdown'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      language: '',
      topic: '',
      onlyReviews: false,
      lastKeyPressedTime: 0,
      disableFields: true
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnlyReviews = this.handleOnlyReviews.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

  handleFormSubmit(e) {
    let searchQuery = this.state.query.trim();
    let topicFilter = this.state.topic.trim();
    let languageFilter = this.state.language.trim();

    if(searchQuery != '') {
      this.setState({ disableFields: false })
      this.props.loading(true);
      this.props.emptyScreen(false);
      if (Date.now() - this.state.lastKeyPressedTime > 1000) {
        let joinedQuery = "?q=";
        let language = '';
        let topic = '';
        joinedQuery += searchQuery.split(' ').map(word => `${word.trim()}`).join('+');
        languageFilter = languageFilter.split(' ').map(word => `${word.trim()}`).join('+');
        topicFilter = topicFilter.split(' ').map(word => `${word.trim()}`).join('+');

        if(languageFilter != '') {
          language = `+language:${languageFilter}`
        }
        if(topicFilter != '') {
          topic = `+topic:${topicFilter}`
        }

        console.log(`http://api.github.com/search/repositories${joinedQuery}${topic}${language}&sort=stars&order=desc`);

        fetch(`http://api.github.com/search/repositories${joinedQuery}${topic}${language}&sort=stars&order=desc`)
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          if(body.items != '') {
            this.props.handleSearch(body.items)
          } else {
            this.props.loading(false);
            this.props.emptyScreen(true);
            throw new Error('Did not return any results!')
          }
        })
        .catch(error => this.props.error(error.message));
        this.props.loading(false);
      } // end Date.now check
    } else {
      this.props.loading(false);
      this.props.emptyScreen(true);
      this.setState({ topic: '' })
      this.setState({ language: '' })
      this.setState({ onlyReviews: false })
      this.setState({ disableFields: true })
    }
  }

  handleSearch(e) {
    this.props.loading(true);
    this.props.handleSearch([])
    this.setState({ lastKeyPressedTime: Date.now() })
    this.setState({ query: e.target.value.toLowerCase() })
    setTimeout(() => this.handleFormSubmit(e), 1000);
  }

  handleOnlyReviews(e) {
    this.props.loading(true);
    this.setState({ lastKeyPressedTime: Date.now() })
    this.setState({ onlyReviews: !this.state.onlyReviews })
    console.log("onlyReviews: " + this.state.onlyReviews);
    setTimeout(() => this.handleFormSubmit(e), 1000);
  }

  handleTopicChange(e) {
    this.props.loading(true);
    this.setState({ lastKeyPressedTime: Date.now() })
    this.setState({ topic: e.target.value.toLowerCase() })
    setTimeout(() => this.handleFormSubmit(e), 1000);
  }

  handleLanguageChange(e) {
    this.props.loading(true);
    this.setState({ lastKeyPressedTime: Date.now() })
    this.setState({ language: e.target.value.toLowerCase() })
    setTimeout(() => this.handleFormSubmit(e), 1000);
  }

  render() {

    return(
      // <form onSubmit={this.handleFormSubmit}>
      <div>
        <SearchField
          className={this.props.className}
          handlerFunction={this.handleSearch}
          placeholder="Search GitHub repositories"
        />
        <SearchDropdown
          disableField={this.state.disableFields}
          handleOnlyReviews={this.handleOnlyReviews}
          onlyReviews={this.state.onlyReviews}
          handleLanguageChange={this.handleLanguageChange}
          handleTopicChange={this.handleTopicChange}
          topic={this.state.topic}
          language={this.state.language}
        />
      </div>
    );
  }

}

export default SearchBar;
