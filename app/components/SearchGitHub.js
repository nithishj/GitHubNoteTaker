import React from 'react';
import { PropTypes } from 'react-router'

class SearchGitHub extends React.Component
{
  handleSubmit()
    {
       var username = this.refs.username.value;
       this.refs.username.value = "";
       this.context.history.pushState(null, '/profile/'+username);
    }
     render()
  {
     return <div classNam="col-sm-12">
               <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" ref="username" />
                </div>
                <div className="form-group col-sm-5">
                    <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                </div>

               </form>
            </div>
    }

}

SearchGitHub.contextTypes = { history: PropTypes.history }

export default SearchGitHub;