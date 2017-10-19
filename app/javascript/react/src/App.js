import React, { Component } from 'react'
import SearchBar from './containers/SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.submission = this.submission.bind(this)
  }

  submission(e) {

    // this.setState({ data: this.state.data.concat(e.query) })
    console.log("App received query of = " + e.query)
    console.log("App received bool of = " + e.onlyReviews)
  }

  render() {
    return (
      <div className="row">
        <div className="medium-8 medium-offset-2 small-12 columns">
          <h1 className="text-center">RepoRev</h1>
          <SearchBar submission={this.submission} />
        </div>
      </div>
    );
  }
}

export default App;
