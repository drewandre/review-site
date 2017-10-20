import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchBar from './containers/SearchBar'
import RepoShowContainer from './containers/RepoShowContainer';
import NavBar from "./components/NavBar"

const App = props => (
  <div className="row">
    <NavBar />
    <div className="medium-8 medium-offset-2 small-12 columns">
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/:user_slug/:repo_slug" component={RepoShowContainer} />
      </Switch>
    </div>
  </div>
)

export default App
