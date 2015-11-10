var React = require('react');

var UserProfile =React.createClass({
	propTypes:{
     username:React.PropTypes.string.isRequired,
     bio:React.PropTypes.object.isRequired
	},
   render:function()
	{

		var bio = this.props.bio;
		var fieldNames = ['name', 'login', 'email', 'location', 'company', 'followers', 'following', 'public_repos', 'blog'];
		var fields = fieldNames.map(function(field, index){
		return (bio[field]) ==0?null:(bio[field] && <li key={index} className="list-group-item">{field}: {bio[field]}</li>);
		});

	return  <div className="col-md-4">
			<h3> User Profile </h3>
				<ul className="list-group">
					{bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
					{fields}
				</ul>
			</div>

    }

});

module.exports = UserProfile;