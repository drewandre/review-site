import React, { Component } from 'react'
import SearchField from '../components/SearchField'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      query: '',
      onlyReviews: false,
      lastKeyPressedTime: Date.now()
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateSearch = this.validateSearch.bind(this);
  }

  handleFormSubmit(e) {
    // e.preventDefault();
    // event.persist()
    console.log(Date.now() - this.state.lastKeyPressedTime)
    console.log(Date.now() - this.state.lastKeyPressedTime < 1000)
    if (Date.now() - this.state.lastKeyPressedTime < 1000) {

      let joinedQuery = "?q="
      if(this.validateSearch(this.state.query)) {

        joinedQuery+=this.state.query.split(' ').map(word => `${word.trim()}`).join('+');

        // let formPayLoad = { query: joinedQuery, onlyReviews: this.state.onlyReviews };
        // this.props.submission(formPayLoad);

        // fetch(`http://drewandre:2c1e857e91fa2e726c2ee76f060ca522b8b361c2@api.github.com/search/repositories${joinedQuery}&sort=stars&order=desc`)

        fetch(`http://api.github.com/search/repositories${joinedQuery}&sort=stars&order=desc`)
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
        .then(body => { this.props.results(body.items) })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      }
    } // end Date.now check
  }

  handleOptions(e) {
    console.log("clicked!");
    this.setState({ onlyReviews: !this.state.onlyReviews })
  }

  handleSearch(e) {
    this.setState({ lastKeyPressedTime: Date.now() })

    this.validateSearch(e.target.value)
    this.setState({ query: e.target.value.toLowerCase() })

    setTimeout(() => this.handleFormSubmit(e), 1000);
    // this.handleFormSubmit(e);

  }

  validateSearch(search) {
    if (search === '') {
      let newError = { search: 'Search field may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.search
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<div key={error}>{error}</div>)
      })
      errorDiv = <div>{errorItems}</div>
    }
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="row collapse postfix-round">
            <div className="small-10 medium-10 large-11 columns">
              <SearchField
                handlerFunction={this.handleSearch}
                placeholder="Search GitHub repositories"
              />
            </div>
            <div className="small-2 medium-2 large-1 columns">
              <a className="dropdown button postfix arrow-only" onClick={this.handleOptions}>
                <div className="options-dropdown">

                </div>
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  }

}

export default SearchBar;
