import React from "react"

const CommentTile = props => {
  return (
    <div>
      <a href={props.comment.username}>{props.comment.username}</a>
      <p>{props.comment.body}</p>
    </div>
  )
}

export default CommentTile

// import React from 'react';
// import TextInputField from '../components/TextInputField'
// // import { Link } from 'react-router'
//
// class CommentTile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comment:''
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
//     console.log(this.state.comment)
//     return(
//       <form className="callout" onSubmit={this.handleFormSubmit}>
//         <TextInputField
//           content={this.state.comment}
//           label="Body"
//           name="body"
//           handleChange={this.handleChange}
//         />
//         <div className="button-group">
//           <input className="button" type="submit" value="Submit" />
//         </div>
//       </form>
//     )
//   }
// }
//
// export default CommentTile;
