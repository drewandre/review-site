import React from "react"

const RepoShowComponent = props => {
  return (
    <div className='repo-show-component'>
      <a href={props.repo.github_url}>{props.repo.user_slug}/{props.repo.repo_slug}</a>
    </div>
  )
}

export default RepoShowComponent
