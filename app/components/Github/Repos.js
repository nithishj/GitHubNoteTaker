var React = require('react');

var Repos =React.createClass({
   propTypes:{
     username:React.PropTypes.string.isRequired,
     repos:React.PropTypes.array.isRequired
	},
    render:function()
	{
     return <div className="col-md-4">
         	  Repos <br/>
				User Name: {this.props.username} <br/>
				Repos: {this.props.repos}
        	</div>
      
    }


});

module.exports = Repos;