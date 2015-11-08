var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var ReactRouter = require('react-router');
var Profile = require('../components/Profile');
var IndexRoute  = ReactRouter.IndexRoute ;
var Route = ReactRouter.Route;

module.exports = (
	<Route name="app" path="/" component={Main}>
        <IndexRoute  component={Home}/>
        <Route path="profile/:username" component={Profile} />
	</Route>
	);