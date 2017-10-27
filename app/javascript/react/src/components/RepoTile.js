import React from "react";
import { getLanguageColor, prettifyStars } from "../helpers/languageColors"

const RepoTile = props => {

  let repos = props.searchResults.map(repo => {
    let key = repo.id
    let repoName = repo.name
    let repoApiUrl = repo.url
    let repoDescription = repo.description
    let repoLanguage = repo.language
    let repoStarCount = prettifyStars(repo.stargazers_count)
    let languageColor = getLanguageColor(repoLanguage)
    const repoUrl = `/${repo.owner.login}/${repo.name}`

    return (
      <div key={key} className="repo-tile">
        <a className="repo-link" href={repoUrl}>{repoName}</a>

        <div className="repo-icon">
          <i className="fa fa-heart" aria-hidden="true"></i> {repoStarCount}
        </div>

        <div className="repo-icon">
          <i className="fa fa-circle" style={{color: languageColor}} aria-hidden="true"></i> {repoLanguage}
        </div>

        <p className="truncate">{repoDescription}</p>
      </div>
    );
  });

  return (
    <div className='search-results' id={props.id} >
      {repos}
    </div>
  );
}

export default RepoTile;
