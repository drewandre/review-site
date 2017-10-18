import React, { Component } from 'react'
import SearchBar from './containers/SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.query = this.query.bind(this)
  }

  query(submission) {
    this.setState({ data: this.state.data.concat(submission) })
    console.log(submission)
  }

  render() {
    return (
      <div className="row">
        <div className="medium-8 medium-offset-2 small-12 columns">
          <h1 className="text-center">RepoRev</h1>
          <SearchBar query={this.query} />
        </div>
      </div>
    );
  }
}

export default App
