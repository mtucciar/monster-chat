import React, { Component, PropTypes } from 'react';

export default class AddUserInput extends Component {
  // static propTypes = {
  //     addUser: PropTypes.func.isRequired
  // }

  render() {
    return (
      <div>
      <input type="text" autoFocus="true" placeholder="Add a user"/>
      <button type="button" onClick={this.addUser}>Add User</button>
      </div>
    );

    addUser: function(e) {
      const userName = e.target.value.trim();
      this.props.addUser(userName);
    }

  }
}
