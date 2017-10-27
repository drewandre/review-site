import React, { Component } from "react"
import SearchBar from "./SearchBar"
import RepoTile from "../components/RepoTile"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.results = this.results.bind(this)
  }

  results(event) {
    this.setState({ results: event })
  }

  render() {

    return(
      <div className="results">
        <RepoTile
          searchResults={this.props.searchResults}
        />
        <hr />
      </div>
    );
  }
}

export default Index;
