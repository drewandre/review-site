import React from "react"

const CommentTile = props => {
  return (
    <div className="comment-tile row">
      <div className="user-box small-3 column">
        <img src={props.data.user.avatar_url}></img>
        <br />
        <a href={`/${props.data.user.login}`}>{props.data.user.name}</a>
      </div>
      <div className="small-9 column">
        <div className="comment-body">
          {props.body}
        </div>
      </div>
    </div>
  )
}

export default CommentTile
