import React from "react"

const VoteBox = props => {
  let user_vote = props.data.user_vote

  return (
    <span>
      <span className={["vote", (user_vote == true ? "upvoted" : "")].join(" ")}
            onClick={props.upvote}>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i> {props.data.upvotes}
      </span>
      <span className={["vote", (user_vote == false ? "downvoted" : "")].join(" ")}
            onClick={props.downvote}>
        <i className="fa fa-thumbs-down" aria-hidden="true"></i> {props.data.downvotes}
      </span>
    </span>
  )
}

export default VoteBox
