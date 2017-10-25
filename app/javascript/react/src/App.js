import React from 'react'
import ReviewContainer from './containers/ReviewContainer'
import IndexPage from './containers/IndexPage'
import NavBar from "./containers/NavBar"
import IndexSearch from "./containers/IndexSearch"
import RepoShowPage from "./containers/RepoShowPage"

class App extends React.Component {
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
    // this.setState({ loading: !this.state.loading })
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
        <div className="row">
          <div className="small-10 small-offset-1 columns">
            <IndexSearch
              searchResults={this.state.searchResults}
              loading={this.state.loading}
            />
            <RepoShowPage userSlug="zerovolts" repoSlug="gitquest" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
