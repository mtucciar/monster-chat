import React, { Component, PropTypes } from 'react';

export default class SendMessage extends Component {

  render() {

    var user = "USER1"

    var userMessageContainerStyle = {
      display: 'inline-block',
      marginTop: '20px',
      border: 'solid black 1px',
      borderRadius: '15px',
      width: '400px'
    }

    var userNameStyle = {
      background: 'grey',
      color: 'white',
      marginTop: '-19px',
      borderTopLeftRadius: '13px',
      borderTopRightRadius: '13px',
    }

    var messageContainerStyle = {
      width: '90%',
      height: '200px',
      marginLeft: '15px',
      marginBottom: '15px'
    }

    var buttonStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: '15px'
    }

    return (
      <div style={userMessageContainerStyle}>
        <div style={userNameStyle}>
          <h3 style={{marginLeft: '15px'}}>{user}</h3>
        </div>
        <div>
          <input style={messageContainerStyle} type="text" />
        </div>
        <button style={buttonStyle}>Send Message</button>
      </div>
    );
  }
}
