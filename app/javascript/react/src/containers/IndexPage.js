import React, { Component } from 'react';
import Index from './Index';
import NavBar from './NavBar';

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

  handleSearch(event) {
    this.setState({ searchResults: event })
  }

  loading(event) {
    this.setState({ loading: event })
  }

  render() {
    return (
      <div>
        <nav>
          <NavBar
            handleSearch={this.handleSearch}
            loading={this.loading}
          />
        </nav>
        <Index
          searchResults={this.state.searchResults}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default IndexPage;
