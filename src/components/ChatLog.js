import React, { Component, PropTypes } from 'react';

export default class ChatLog extends Component {

  static propTypes = {
    chatLog: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {

    const { chatLog: { chatLog }, dispatch } = this.props;

    var chatStyle = {
      border: 'solid black 1px'
    }

    return (
      <div className="row">
        <div className="small-12 columns">
          <div style={chatStyle} className="panel radius">
            <h5>Chat Log</h5>
            <hr/>
            {this.props.chatLog.map(userMessage => <p>{userMessage.user}: {userMessage.message}</p>)}
          </div>
        </div>
      </div>
    );
  }
}
