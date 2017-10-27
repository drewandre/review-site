import React from "react"

import { getLanguageColor } from "../helpers/languageColors"

const RepoShowComponent = props => {

  let ratingTag
  if (props.repo.average_rating) {
    ratingTag = (
      <span className="rating">
        <i className="fa fa-star" aria-hidden="true"></i> {props.repo.average_rating.toFixed(1)}
      </span>
    )
  } else {
    <span></span>
  }

  let languageTag = (
    <span className="rating">
      <i className="fa fa-circle" style={{color: getLanguageColor(props.repo.language)}} aria-hidden="true"></i> {props.repo.language}
    </span>
  )

  let addNewReviewButton
  if (props.showNewReview) {
    addNewReviewButton = (
      <button onClick={props.toggleShowNewReview}>Hide Review</button>
    )
  } else {
    addNewReviewButton = (
      <button onClick={props.toggleShowNewReview}>Add Review</button>
    )
  }

  return (
    <div className="repo-show">
      <h2><a href={`/${props.repo.user_slug}`}>{props.repo.user_slug}</a>/
      <a href={props.repo.github_url}><strong>{props.repo.repo_slug}</strong></a>
      </h2>
      {ratingTag} {languageTag} <span className="rating">{props.repo.total_reviews || 0} reviews</span>
      <br />
      <div className="repo-description">{props.repo.description}</div>
      <br />
      {addNewReviewButton}
    </div>
  )
}

export default RepoShowComponent
