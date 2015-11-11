import React from 'react';


class NotesList extends React.Component
{

render()
	{
		
		var notesList=this.props.notes.map((note,key) =>
		{
			return <li className="list-group-item" key={key}>{note}</li>
		});

      	return <ul className="list-group">
      			   {notesList}
               </ul>     
    }

}

export default NotesList;