import React from "react"
import NavBar from "./NavBar"
import IndexSearch from "./IndexSearch"

class IndexPage extends React.Component {
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
      <div>
        <nav>
          <NavBar
            handleSearch={this.handleSearch}
            loading={this.loading}
          />
        </nav>
        <IndexSearch
          searchResults={this.state.searchResults}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default IndexPage
