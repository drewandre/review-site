// import React, { Component } from "react"
// import SearchBar from "./SearchBar"
// import RepoTile from "../components/RepoTile"
//
// import { Circle } from "better-react-spinkit"
//
// class IndexSearch extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       results: [],
//     }
//     this.submission = this.submission.bind(this)
//     this.results = this.results.bind(this)
//
//   }
//
//   submission(e) {
//     // this.setState({ data: this.state.data.concat(e) })
//     console.log("IndexSearch received query of = " + e.query)
//     console.log("IndexSearch received bool of = " + e.onlyReviews)
//   }
//
//   results(e) {
//     this.setState({ results: e })
//     // console.log("IndexSearch received this first result name: " + e[0].name)
//     // console.log("IndexSearch results state: " + this.state.results);
//   }
//
//   render() {
//
//     let loadingStatus = null
//     let circle = null
//
//     if (this.props.loading) {
//       loadingStatus="loading icon true"
//       circle = <Circle size={50} scaleEnd={1} />
//
//     } else {
//       loadingStatus = ""
//       circle = null
//     }
//
//     return(
//       <div>
//         <div className="results">
//           <RepoTile
//             searchResults={this.props.searchResults}
//           />
//         </div>
//         <div className="centered">{circle}</div>
//       </div>
//     );
//   }
// }
//
// export default IndexSearch;
