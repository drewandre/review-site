import React, { Component } from 'react'
import SearchBar from './SearchBar'
import RepoTile from '../components/RepoTile'

import { Circle } from 'better-react-spinkit'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
    this.results = this.results.bind(this)
  }

  results(event) {
    this.setState({ results: event })
  }

  render() {
    let circle = null
    if (this.props.loading) {
      circle = <Circle size={50} scaleEnd={1} />
    } else {
      circle = null
    }

    return(
      <div>
        <div className="results">
          <RepoTile
            searchResults={this.props.searchResults}
          />
        </div>
        <div className="centered">{circle}</div>
      </div>
    );
  }
}

export default Index;
