import React, { Component, PropTypes } from 'react';

export default class AddUserInput extends Component {
  // static propTypes = {
  //     addUser: PropTypes.func.isRequired
  // }

  constructor(props) {
    super(props);
    this.state = {userName: 'new user 1'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var userName = this.state.userName.trim();
    console.log(userName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="small-8 small-offset-2 columns">
              <div className="row collapse">
                <div className="small-8 columns">
                  <input type="text" autoFocus="true" placeholder="Add a user" value={this.state.userName} onChange={this.handleChange} />
                </div>
                <div className="small-4 columns">
                  <input className="button postfix" type="submit" value="Add User"/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
