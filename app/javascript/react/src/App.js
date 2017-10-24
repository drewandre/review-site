import React, { Component } from 'react'
import Index from './containers/Index'
import NavBar from './containers/NavBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      loading: false,
      emptyScreen: false,
      error: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.loading = this.loading.bind(this);
    this.emptyScreen = this.emptyScreen.bind(this);
    this.error = this.error.bind(this);

  }

  handleSearch(e) {
    this.setState({ searchResults: e })
  }

  loading(e) {
    this.setState({ loading: e })
  }

  emptyScreen(e) {
    this.setState({ emptyScreen: e })
  }

  error(e) {
    this.setState({ error: e })
  }

  render() {
    return (
      <nav>
        <NavBar
          handleSearch={this.handleSearch}
          loading={this.loading}
          emptyScreen={this.emptyScreen}
          error={this.error}
        />
        <Index
          searchResults={this.state.searchResults}
          loading={this.state.loading}
          emptyScreen={this.state.emptyScreen}
          error={this.state.error}
        />
      </nav>
    );
  }
}

export default App;
