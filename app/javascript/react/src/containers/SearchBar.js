import React, { Component } from 'react'
import SearchField from '../components/SearchField'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      query: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateSearch = this.validateSearch.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if(
      this.validateSearch(this.state.query)
    ) {
      this.props.query(this.state.query);
    }
  }

  handleSearch(e) {
    this.validateSearch(e.target.value)
    this.setState({ query: e.target.value })
    console.log(e.target.value);
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
        {errorDiv}
          <div className="small-10 columns">
            <SearchField
              query={this.state.query}
              name='Search'
              handlerFunction={this.handleSearch}
              placeholder="Search GitHub repositories"
            />
          </div>
          <div className="small-2 columns">
            <input className="button success postfix" type="submit" value="Submit" />
          </div>
      </form>
    );
  }

}

export default SearchBar;
