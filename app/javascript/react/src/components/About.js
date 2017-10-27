import React from "react";

const About = props => {

  return(
    <div id='app'>
      <div className='centered-div-text'>
        <h1>Welcome to RepoRev!</h1>
        <p>Here you can rate and review <strong><a href='https://github.com/'>GitHub</a></strong> repositories.</p>
        <p>Search by title, programming language, or by topic.</p>
        <p>
          Built at <strong><a href='https://www.launchacademy.com/'>Launch Academy</a></strong> by
          <strong><a href='https://www.linkedin.com/in/zerovolts/'> Zach Stone</a>,
          <a href='https://www.linkedin.com/in/drewandre/'> Drew André</a>,
          <a href='https://www.linkedin.com/in/marcus-boyd/'> Marcus Boyd</a>,</strong> and<strong>
          <a href='https://www.linkedin.com/in/tedwcook/'> Ted Cook</a></strong>.
        </p>
      </div>
    </div>
  )
}

export default About;
