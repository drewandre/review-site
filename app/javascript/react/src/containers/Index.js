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
        <i className="fa fa-ellipsis-h fa-2x" id='centered-ellipses' aria-hidden="true"></i>
      </div>
    );
  }
}

export default Index;
