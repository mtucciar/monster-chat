import React, { Component, PropTypes } from 'react';

export default class ChatLog extends Component {

  render() {

    const chatList = [{user: "USER 1", message: "Hello World!"}, {user: "USER 2", message: "This is so cool!"}];
    var chatStyle = {
      border: 'solid black 1px'
    }

    return (
      <div className="row">
        <div className="small-12 columns">
          <div style={chatStyle} className="panel radius">
            <h5>Chat Log</h5>
            <hr/>
            {chatList.map(userMessage => <p>{userMessage.user}: {userMessage.message}</p>)}
          </div>
        </div>
      </div>
    );
  }
}
