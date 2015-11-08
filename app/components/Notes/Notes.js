var React = require('react');
var NotesList = require('./NotesList');
var AddNotes = require('./AddNotes');

var Notes =React.createClass({
	propTypes:{
     username:React.PropTypes.string.isRequired,
     notes:React.PropTypes.array.isRequired,
     addNote:React.PropTypes.func.isRequired,
	},
     render:function()
	{
     return <div className="col-md-4">
        	   <h3> Notes for {this.props.username} </h3>
        	    <AddNotes addNote={this.props.addNote} />
				<NotesList notes={this.props.notes} />
       	    </div>  
    }

});

module.exports = Notes;