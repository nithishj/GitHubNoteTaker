import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default (
	<Route name="app" path="/" component={Main}>
        <IndexRoute  component={Home}/>
        <Route path="profile/:username" component={Profile} />
	</Route>
	);