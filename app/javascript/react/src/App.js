import React, { Component } from 'react'
import Index from './containers/Index'
import NavBar from './containers/NavBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      loading: false,
      searchMessage: '',
      error: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.loading = this.loading.bind(this);
    this.searchMessage = this.searchMessage.bind(this);
    this.error = this.error.bind(this);

  }

  handleSearch(e) {
    this.setState({ searchResults: e })
  }

  loading(e) {
    this.setState({ loading: e })
  }

  searchMessage(e) {
    this.setState({ searchMessage: e })
  }

  error(e) {
    this.setState({ error: e })
  }

  render() {
    return (
      <div>
        <nav>
          <NavBar
            handleSearch={this.handleSearch}
            loading={this.loading}
            searchMessage={this.searchMessage}
            error={this.error}
          />
        </nav>
        <Index
          searchResults={this.state.searchResults}
          loading={this.state.loading}
          searchMessage={this.state.searchMessage}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
