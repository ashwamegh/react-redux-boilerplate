// GLobal imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Local imports
import Routes from './routes/Routes';

// Redux imports
import store from './state-management/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>
)
