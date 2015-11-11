import React from 'react';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

 var rebase = Rebase.createClass("https://fiery-torch-1031.firebaseio.com");
class Profile extends React.Component
{
   constructor(props)
	{
		super(props)
   this.state = {
				notes:[],
				bio: {},
				repos: []
        	};

	}

	init(username)
	{
	
       //this.ref = new FireBase("https://fiery-torch-1031.firebaseio.com/"+username);
       //var chidRef = this.ref.child(this.props.params.username);
       //this.bindAsArray(this.ref,'notes');
	 this.ref =rebase.bindToState(username, {
			context: this,
			state: 'notes',
			asArray: true
		});

       helpers.getGithubInfo(username).then((data)=>
       {
        this.setState({repos:data.repos,bio:data.bio});

       })
	}

	componentWillMount()
	{
       this.init(this.props.params.username);
	}
	
	componentWillUnmount()
	{
		rebase.removeBinding(this.ref);
	}

    componentWillReceiveProps(nextProps)
	{
		
	   rebase.removeBinding(this.ref);
       this.init(nextProps.params.username);
	}

	handleAddNote(newNote)
	{
       rebase.post(this.props.params.username,{
       	data:this.state.notes.concat([newNote])
       })
	}

	render()
	{
		//getting params from props by react-router ex: this.props
 return <div className="row">
           <UserProfile username={this.props.params.username} bio={this.state.bio}/>
           <Repos repos={this.state.repos} username={this.props.params.username}/>
           <Notes notes={this.state.notes} username={this.props.params.username} addNote={this.handleAddNote.bind(this)}/>
         </div>
 	}
}

export default Profile
