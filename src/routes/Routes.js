//  Global imports
import { Route, Switch, Redirect } from 'react-router';
import { Component } from 'react';

// Local imports
import App from './../App';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={App}
          exact
          path="/"
        />
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default Routes;
