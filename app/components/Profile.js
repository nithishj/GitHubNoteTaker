var React = require('react');
var ReactRouter = require('react-router');

var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');

var Profile =React.createClass({
	mixins:[ReactFireMixin],
	getInitialState:function()
	{
     return {
				notes:[],
				bio: {bio:"I Am Human"},
				repos: [1,2,3]
        	}

	},
	componentWillMount:function()
	{

       this.ref = new FireBase("https://fiery-torch-1031.firebaseio.com/"+this.props.params.username);
       //var chidRef = this.ref.child(this.props.params.username);
       this.bindAsArray(this.ref,'notes');

	},
	componentWillUnmount:function()
	{
       this.unbind('notes');
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