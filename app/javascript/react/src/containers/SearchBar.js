import React, { Component } from 'react'
import SearchField from '../components/SearchField'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      query: '',
      onlyReviews: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateSearch = this.validateSearch.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let joinedQuery = "?q="
    if(this.validateSearch(this.state.query)) {

      joinedQuery+=this.state.query.split(' ')
      .map(word => `${word.trim()}`)
      .join('+');

      let formPayLoad = {
        query: joinedQuery,
        onlyReviews: this.state.onlyReviews
      };

      this.props.submission(formPayLoad);


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
      .then(body => {
        console.log(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

    }
  }

  handleOptions(e) {
    this.setState({ onlyReviews: !this.state.onlyReviews })
  }

  handleSearch(e) {
    this.validateSearch(e.target.value)
    this.setState({ query: e.target.value.toLowerCase() })
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
      <form className="row collapse postfix-round" onSubmit={this.handleFormSubmit}>
        <div className="small-8 columns">
          <SearchField
            handlerFunction={this.handleSearch}
            placeholder="Search GitHub repositories"
          />
        </div>
        <div className="small-2 columns">
          <input className="button success postfix" defaultValue="Only Reviews" onClick={this.handleOptions} />
        </div>
        <div className="small-2 columns">
          <input className="button outline postfix" type="submit" value="Submit" />
        </div>
      </form>
    );
  }

}

export default SearchBar;
