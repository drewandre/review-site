import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './containers/IndexPage';
import RepoShowContainer from './containers/RepoShowContainer';
import NavBar from "./containers/NavBar";

const App = props => (
  <div className="row">
    <div className="medium-8 medium-offset-2 small-12 columns">
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/:user_slug/:repo_slug" component={RepoShowContainer} />
      </Switch>
    </div>
  </div>
)

export default App
