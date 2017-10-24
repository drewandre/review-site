import React from 'react';

const RepoTile = props => {

  let repos = props.searchResults.map(repo => {
    let key=repo.id
    let repoName=repo.full_name
    let repoApiUrl=repo.url
    let repoDescription=repo.description
    let repoLanguage=repo.language
    let repoStarCount = repo.stargazers_count
    let languageColor

    repoStarCount = repoStarCount > 999 ? (repoStarCount/1000).toFixed(1) + 'k' : repoStarCount

    // find_language_color(repoLanguage);
    // thousands_to_k(repoStars)

    switch (repoLanguage) {
    case 'Arduino':
      languageColor={color: '#BB7CCF'}
    break;
    case 'C++':
      languageColor={color: '#F14C7D'}
    break;
    case 'C':
      languageColor={color: '#555555'}
    break;
    case 'Python':
      languageColor={color: '#3674A3'}
    break;
    case 'JavaScript':
      languageColor={color: '#F2DE62'}
    break;
    case 'Eagle':
      languageColor={color: '#CCCCCC'}
    break;
    case 'HTML':
      languageColor={color: '#E24B2C'}
    break;
    case 'Processing':
      languageColor={color: '#0498D6'}
    break;
    case 'Assembly':
      languageColor={color: '#6E4B18'}
    break;
    case 'C#':
      languageColor={color: '#208411'}
    break;
    case 'CSS':
      languageColor={color: '#55407B'}
    break;
    case 'Objective-C':
      languageColor={color: '#4292FD'}
    break;
    case 'Ruby':
      languageColor={color: '#6F1417'}
    break;
    case 'TypeScript':
      languageColor={color: '#2D7588'}
    break;
    case 'Java':
      languageColor={color: '#AF7122'}
    break;
    case 'PHP':
      languageColor={color: '#4F5F93'}
    break;
    case 'Scala':
      languageColor={color: '#C02D42'}
    break;
    case 'Shell':
      languageColor={color: '#8CDE59'}
    break;
    case 'Ruby':
      languageColor={color: '#6F1417'}
    break;
    case 'Go':
      languageColor={color: '#3661A9'}
      break;
    case 'PHP':
      languageColor={color: '#4F5F93'}
      break;
    case 'PowerShell':
      languageColor={color: '#002755'}
      break;
    case 'Vim script':
      languageColor={color: '#249D4F'}
    break;
    default:
      languageColor={color: '#3674A3'}
  }

    return (
      <div key={key} className="repo-tile">
        <a className="repo-link" href={repoApiUrl}>{repoName}</a>

        <i className="repo-icon fa fa-star" aria-hidden="true">
          {repoStarCount}
        </i>

        <div className="repo-icon">
        <i className="fa fa-circle" style={languageColor} aria-hidden="true"></i>
          {repoLanguage}
        </div>

        <p className="truncate">{repoDescription}</p>

      </div>
    );
  });

  return (
    <div>
      {repos}
    </div>
  );

}

export default RepoTile;
