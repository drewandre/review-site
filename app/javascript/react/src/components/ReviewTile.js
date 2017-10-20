import React from "react"
import CommentTile from "./CommentTile"

const ReviewTile = props => {
  const user = props.review.user
  const comments = props.comments.map(comment =>
    <CommentTile comment={{username: "zach", body: "I agree"}} />
  )
  console.log(props)

  return (
    <div>
      <a href={user.github_url}>{user.login}</a>
      <p>{props.review.body}</p>
      {comments}
    </div>
  )
}

export default ReviewTile

// import React from 'react';
// import TextInputField from '../components/TextInputField'
// import { Link } from 'react-router'
//
// class ReviewTile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       review:''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     let value = event.target.value;
//     let name = event.target.name;
//     this.setState({ [name]: value })
//   }
//
//   handleFormSubmit(event) {
//     event.preventDefault();
//   }
//
//   render() {
//     return(
//       <form className="callout" onSubmit={this.handleFormSubmit}>
//         <TextInputField
//           content={this.state.review}
//           label="Review"
//           name="review"
//           handleChange={this.handleChange}
//         />
//         <div className="button-group">
//           <input className="button" type="submit" value="Submit" />
//         </div>
//       </form>
//     )
//
//     let commentComponents = comments.map((comment) => {
//       return(
//         <CommentTile key={comment.id}
//           value={comment.body}
//         />
//       )
//     })
//   }
// }
//
// export default ReviewTile;
