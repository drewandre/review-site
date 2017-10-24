import React from "react"

const RepoShowComponent = props => {
  return (
    <p>
      <a href={props.repo.github_url}>{props.repo.user_slug}/{props.repo.repo_slug}</a>
    </p>
  )
}

export default RepoShowComponent
