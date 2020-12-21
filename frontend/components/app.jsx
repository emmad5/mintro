import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../containers/LoginFormContainer';
import SignupFormContainer from '../containers/SignupFormContainer';
import HomepageContainer from '../containers/HomepageContainer';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/" component={HomepageContainer} />
    </Switch>
  </div>
)

export default App