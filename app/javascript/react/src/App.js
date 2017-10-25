<<<<<<< HEAD
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './containers/IndexPage';
import RepoShowContainer from './containers/RepoShowContainer';
import NavBar from "./containers/NavBar";

const App = props => (
  <div className="row">
    <div className="medium-8 medium-offset-2 small-12 columns">
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/:user_slug/:repo_slug" component={RepoShowContainer} />
      </Switch>
    </div>
  </div>
)

export default App
=======
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
>>>>>>> master
