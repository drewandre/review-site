import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./containers/IndexPage";
import RepoShowPage from "./containers/RepoShowPage";
import UserShowPage from "./containers/UserShowPage"
import About from "./components/About"

const App = props => (
  <div>
    <IndexPage />
    <div className='wrapper row'>
      <div className="medium-8 medium-offset-2 small-12 columns">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/:user_slug" component={UserShowPage} />
          <Route exact path="/:user_slug/:repo_slug" component={RepoShowPage} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
