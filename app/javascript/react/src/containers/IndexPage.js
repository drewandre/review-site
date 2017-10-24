import React, { Component } from 'react'
import IndexSearch from './IndexSearch'
import NavBar from './NavBar'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      loading: false
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.loading = this.loading.bind(this);
  }



  handleSearch(e) {
    this.setState({ searchResults: e })
  }

  loading(e) {
    this.setState({ loading: e })
    // this.setState({ loading: !this.state.loading })
  }

  render() {
    return (
      <nav>
        <NavBar
          handleSearch={this.handleSearch}
          loading={this.loading}
        />
        <IndexSearch
          searchResults={this.state.searchResults}
          loading={this.state.loading}
        />
      </nav>
    );
  }
}

export default IndexPage;
