import React, { Component } from 'react'
import SearchBar from './SearchBar'
import RepoTile from '../components/RepoTile'

import { Circle } from 'better-react-spinkit'

class IndexSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
  }

  render() {
    let loadingStatus = null
    let circle = null

    if (this.props.loading) {
      loadingStatus="loading icon true"
      circle = <Circle size={50} scaleEnd={1} />

    } else {
      loadingStatus = ''
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

export default IndexSearch;
