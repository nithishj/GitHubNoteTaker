var React = require('react');
var SearchGitHub = require ('./SearchGitHub');

var Main =React.createClass({
	render:function()
	{
      return  <div classNmae="main-container">
                <nav className="navbar navbar-default" role="navigation">
  					<div className="col-sm-7 col-sm-offset-2" style={{marginTop:"15px"}}>
  					   <SearchGitHub />
  					</div>
                </nav>
                <div className="container">
                   {this.props.children}
                </div>
              </div>

	}
});

module.exports = Main;