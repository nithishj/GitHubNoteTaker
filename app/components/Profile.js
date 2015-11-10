var React = require('react');
var ReactRouter = require('react-router');

var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var helpers = require('../utils/helpers');

var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');

var Profile =React.createClass({
	mixins:[ReactFireMixin],
	getInitialState:function()
	{
     return {
				notes:[],
				bio: {},
				repos: []
        	}

	},
	init:function(username)
	{
	
       this.ref = new FireBase("https://fiery-torch-1031.firebaseio.com/"+username);
       //var chidRef = this.ref.child(this.props.params.username);
       this.bindAsArray(this.ref,'notes');

       helpers.getGithubInfo(username).then(function(data)
       {
        this.setState({repos:data.repos,bio:data.bio});

       }.bind(this))
	},
	componentWillMount:function()
	{
    
       this.init(this.props.params.username);
	},
	componentWillUnmount:function()
	{
       this.unbind('notes');
	},
	componentWillReceiveProps:function(nextProps)
	{
		
	   this.unbind('notes');
       this.init(nextProps.params.username);
	},
	handleAddNote:function(newNote)
	{
       this.ref.push(newNote);
	},
	render:function()
	{
		//getting params from props by react-router ex: this.props
 return <div className="row">
           <UserProfile username={this.props.params.username} bio={this.state.bio}/>
           <Repos repos={this.state.repos} username={this.props.params.username}/>
           <Notes notes={this.state.notes} username={this.props.params.username} addNote={this.handleAddNote}/>
        </div>
 	}

});

module.exports = Profile;