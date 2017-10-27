import React from "react"
import VoteBox from "./VoteBox"
import CommentContainer from "../containers/CommentContainer"

const ReviewTile = props => {
  return (
    <div className="comment-container">
      <div className="review-tile row">
        <div className="user-box small-3 column">
          <img src={props.data.user.avatar_url}></img>
          <br />
          <a href={`/${props.data.user.login}`}>{props.data.user.name}</a>
        </div>
        <div className="small-9 column">
          <span className="rating">
            <i className="fa fa-star" aria-hidden="true"></i> {props.rating}
          </span>
          <VoteBox
            data={props.data}
            upvote={props.handleUpvote}
            downvote={props.handleDownvote}
          />
          <div className="review-body">
            {props.body}
          </div>
        </div>
      </div>
      <CommentContainer reviewId={props.id} />
    </div>
  )
}

export default ReviewTile
