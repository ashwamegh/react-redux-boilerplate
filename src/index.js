// GLobal imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Local imports
import Routes from './routes/Routes';

// Redux imports
import store from './state-management/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>, document.getElementById('root')
);
