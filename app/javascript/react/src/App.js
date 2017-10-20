import React, { Component } from 'react'
import IndexSearch from './containers/IndexSearch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <h1 className="title text-center">RepoRev</h1>
        <div className="row search">
          <div className="medium-8 medium-offset-2 small-10 small-offset-1 columns">
            <IndexSearch />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
