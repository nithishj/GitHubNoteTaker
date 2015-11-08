var React = require('react');

var UserProfile =React.createClass({
	propTypes:{
     username:React.PropTypes.string.isRequired,
     bio:React.PropTypes.object.isRequired
	},
   render:function()
	{

	return  <div className="col-md-4">
				User Profile <br/>
				User Name: {this.props.username} <br/>
				Bio: {this.props.bio.bio}
			</div>

    }

});

module.exports = UserProfile;