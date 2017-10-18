# README


<span>[ ![Codeship Status for drewandre/reporev](https://app.codeship.com/projects/3a1278a0-94b9-0135-3636-26f9e1beef69/status?branch=master)](https://app.codeship.com/projects/251025)</span>

<span><a href="https://codeclimate.com/github/drewandre/reporev/maintainability"><img src="https://api.codeclimate.com/v1/badges/f9a53a27137391842426/maintainability" /></a></span>

<span><a href="https://codeclimate.com/github/drewandre/reporev/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f9a53a27137391842426/test_coverage" /></a></span>

<span>![Coverage Status](https://coveralls.io/repos/drewandre/reporev/badge.png)
</span>

PostgreSQL ER Diagram:
http://bit.ly/2ilNga0
Wireframes:
https://drive.google.com/open?id=0B5NAdgcdVEEZa2FMOEF1ZDFRamM

User stories:
As a user I want to be able to sign up through github or log in

As a user I want to see the highest rated/most rated repos on the home page

As a user I want to be able to search for a repository and view a list of those results on the same (index) page

On the index page, search results should display the average rating, number of ratings, and brief description of repo

On the show page, the repo name should link to the github profile for that repo

On the show page I want to see a more detailed description, quick infographics of version number, primary language, number of forks/downloads, 

On the show page I want to be able to see a section of user-submitted repo alternatives

On the show page I want to be able to expand the comments section

On the show page I want to be able to expand each comment if there is media/links/code attached

As a user I want to be able to leave a review (must include rating, body is optional) and comment and up/down vote on other reviews

As a user I want to be able to view other user’s profiles and view my own as well

As a user I want to be able to share a review from the review show page

As a user and a owner of a repo I want to receive an email when my repo is commented on

As an admin I want to be able to log in through github

As an admin I want to be able to delete reviews

Notes:
** URL routes will match those of github’s (our-site.com/user/repo-name)
** general activity meter -- icon shows if there has been a commit within past few days hours or something
** if up/down vote ratio isn’t favorable, don’t factor rating into average
** user can keep up-to-date with a repo on our page? Notifications of comments?
Users may want to be notified of replies to their comments
** suggest users review repositories that they have starred on github
** helpful/least helpful
** specify version number (sort reviews by version? Give those reviews less weight?)
** check off different boxes to filter searches
