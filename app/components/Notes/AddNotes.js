var React = require('react');
var AddNotes =React.createClass({
	handleSubmit:function()
    {
      var newNote = this.refs.note.value;
      this.refs.note.value = "";
      this.props.addNote(newNote);
    },
     render:function()
	{
     return <div className="input-group">
               <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
               <span className="input-group-btn">
               <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
               </span>
            </div>
    }

});

module.exports = AddNotes;