var React = require('react');
var NotesList =React.createClass({	
     render:function()
	{
		
	  var notesList=this.props.notes.map(function(note,key)
	{
		return <li className="list-group-item" key={key}>{note['.value']}</li>
	});
      return <ul className="list-group">
      		   {notesList}
             </ul>     
    }

});

module.exports = NotesList;