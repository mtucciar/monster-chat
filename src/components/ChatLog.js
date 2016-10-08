import React, { Component, PropTypes } from 'react';

export default class ChatLog extends Component {

  render() {

    const chatList = [{user: "USER 1", message: "Hello World!"}, {user: "USER 2", message: "This is so cool!"}];
    var chatStyle = {
      border: 'solid black 1px',
      float: 'right',
      width: '50%'
    }

    return (
      <div style={chatStyle}>
        <h4>Chat Log</h4>
        {chatList.map(userMessage => <p>{userMessage.user}: {userMessage.message}</p>)}
      </div>
    );
  }
}
