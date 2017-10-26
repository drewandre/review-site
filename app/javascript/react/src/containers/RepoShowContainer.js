// import React, { Component } from "react";
// import RepoShowComponent from "../components/RepoShowComponent";
// import ReviewContainer from "../containers/ReviewContainer";
//
// class RepoShowContainer extends Component {
//   constructor(props)  {
//     super(props)
//     this.state = {
//       repo: {},
//       reviews: []
//     }
//   }
//
//   fetchRepoData(user, repo) {
//     fetch(`/api/v1/users/${user}/repos/${repo}`)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           repo: data
//         })
//       })
//   }
//
//   fetchReviewData(user, repo) {
//     fetch(`/api/v1/users/${user}/repos/${repo}/reviews`)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           reviews: data
//         })
//       })
//   }
//
//   componentDidMount() {
//     const params = this.props.match.params
//     this.fetchRepoData(params.user_slug, params.repo_slug)
//     this.fetchReviewData(params.user_slug, params.repo_slug)
//   }
//
//   render() {
//     const params = this.props.match.params
//
//     return(
//       <div>
//         <div className="repo-show-container">
//           <RepoShowComponent
//             userSlug={params.user_slug}
//             repoSlug={params.repo_slug}
//             id={this.state.repo.id}
//             repo={this.state.repo}
//           />
//           <ReviewContainer userSlug={params.user_slug} repoSlug={params.repo_slug} />
//         </div>
//       </div>
//     )
//   }
// }
//
// export default RepoShowContainer
