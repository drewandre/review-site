import React, { Component } from 'react'
import SearchBar from './SearchBar'
import RepoTile from '../components/RepoTile'

import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave
} from 'better-react-spinkit'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
    this.submission = this.submission.bind(this)
    this.results = this.results.bind(this)
  }

  submission(e) {
    console.log("IndexSearch received query of = " + e.query)
    console.log("IndexSearch received bool of = " + e.onlyReviews)
  }

  results(e) {
    this.setState({ results: e })
  }

  render() {

    let circle = null
    if (this.props.loading) {
      circle = <Circle size={50} scaleEnd={1} />
    } else {
      circle = null
    }

    let message = null;
    if (this.props.emptyScreen) {
      message = <div id='home-screen-title'>RepoRev</div>

    } else {
      message = null
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
