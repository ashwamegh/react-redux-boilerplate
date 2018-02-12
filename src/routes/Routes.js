//  Global imports
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

// Local imports
import App from './../App';


export default (
  <Switch>
    <Route exact path='/' component={App}/>
    <Redirect to="/"/>
  </Switch>
)