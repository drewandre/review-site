import React from "react"
import VoteBox from "./VoteBox"
import CommentContainer from "../containers/CommentContainer"

const ReviewTile = props => {
  return (
    <div>
      <div className="review-tile">
        <span className="rating">
          <i className="fa fa-star" aria-hidden="true"></i> {props.rating}
        </span>
        <VoteBox
          data={props.data}
          upvote={props.handleUpvote}
          downvote={props.handleDownvote}
        />
        <div className="review-body">
          <div></div>
          {props.body}
        </div>
      </div>
      <CommentContainer reviewId={props.id} />
    </div>
  )
}

export default ReviewTile
