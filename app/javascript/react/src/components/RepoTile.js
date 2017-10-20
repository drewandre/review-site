import React from 'react';

const RepoTile = props => {

  let repos = props.results.map(repo => {
    let key=repo.id
    let repoName=repo.name
    let repoDescription=repo.description

    return (
      <div key={key} className="repo-tile">
        <strong><a href="https://www.github.com">{repoName}</a></strong>, {repoDescription}
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
