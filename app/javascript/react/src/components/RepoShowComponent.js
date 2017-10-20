import React from "react"

const RepoShowComponent = props => {
  return (
    <a href={props.repo.github_url}>{props.repo.user_slug}/{props.repo.repo_slug}</a>
  )
}

export default RepoShowComponent
