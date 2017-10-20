import React, { Component } from 'react'
import SearchBar from './SearchBar'
import RepoTile from '../components/RepoTile'

class IndexSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.submission = this.submission.bind(this)
    this.results = this.results.bind(this)

  }

  submission(e) {
    // this.setState({ data: this.state.data.concat(e) })
    console.log("IndexSearch received query of = " + e.query)
    console.log("IndexSearch received bool of = " + e.onlyReviews)
  }

  results(e) {
    this.setState({ results: e })
    // console.log("IndexSearch received this first result name: " + e[0].name)
    // console.log("IndexSearch results state: " + this.state.results);
  }

  render() {
    return(
      <div className="index-search">
        <SearchBar
          // submission={this.submission}
          results={this.results}
        />
        <RepoTile
          results={this.state.results}
        />
      </div>
    );
  }

}

export default IndexSearch;
