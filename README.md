# [Palette](http://reporev.herokuapp.com/) &middot; <span>[ ![Codeship Status for drewandre/reporev](https://app.codeship.com/projects/3a1278a0-94b9-0135-3636-26f9e1beef69/status?branch=master)](https://app.codeship.com/projects/251025) </span><span><a href="https://codeclimate.com/github/drewandre/reporev/maintainability"><img src="https://api.codeclimate.com/v1/badges/f9a53a27137391842426/maintainability" /></a></span><span><a href="https://codeclimate.com/github/drewandre/reporev/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f9a53a27137391842426/test_coverage" /></a></span><span>![Coverage Status](https://coveralls.io/repos/drewandre/reporev/badge.png)</span>

## Description
Reporev is a GitHub repository review app built wit Ruby on Rails and React.
This was created because GitHub does not allow users to review a repository.
Reviews may be voted on by many users. Users can also leave comments under reviews.

![alt text](https://github.com/drewandre/reporev/blob/master/public/top_RepoRev.png)

## Features
* Users may search for an existing GitHub repository
* Each user can add 1 review per repository
* A review consist of a body and a rating from 1-5
* Users can vote on each review
* Users can add multiple comments to each review
* Users can see a profile page for each user
* Each profile page shows a users Name, their followers, who they are following, a bio, and an avatar picture

## Technologies
* User Functionality made with Devise
* User information imported from GitHub using Omni Auth
* Model testing with Rspec
* Feature testing with enzyme
* Styling framework with foundation and CSS
* Deployment on Heroku 

## To run locally:
```
* git clone https://github.com/drewandre/reporev.git
* rake db:create
* rake db:migrate
* rails s
* ./bin/webpacker-dev-server
* http://localhost:3000/
```

## Contributors
* [Zach Stone](https://github.com/zerovolts)
* [Drew Andre](https://github.com/drewandre)
* [Marcus Boyd](https://github.com/Marcus-boyd)
* [Ted Cook](https://github.com/CaptainAngus)
