'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

// Page Components
import Template from './pages/Template/Template';
import Home from './pages/Home/Home-container';

render((
  <Provider store={store}>
    <Router history={hashHistory}>
			<Route component={Template}>
				<Route path="/" component={Home}/>
			</Route>
    </Router>
  </Provider>
), document.getElementById('app'));
