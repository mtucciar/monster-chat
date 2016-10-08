import React, { Component, PropTypes } from 'react';

export default class SendMessage extends Component {

  render() {

    var user = "USER1"

    var userMessageContainerStyle = {
      display: 'inline-block',
      marginTop: '20px',
      border: 'solid black 1px',
      borderRadius: '15px',
      padding: '0'
    }

    var userNameStyle = {
      background: 'grey',
      color: 'white',
      width: '100%',
      marginTop: '-3px',
      borderTopLeftRadius: '13px',
      borderTopRightRadius: '13px',
    }

    var messageContainerStyle = {
      width: '90%',
      height: '100px',
      marginLeft: '15px',
      marginBottom: '15px'
    }

    var buttonStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: '15px'
    }

    return (
      <div className="row">
        <div style={userMessageContainerStyle} className="small-8 small-offset-2 columns end">
          <div style={userNameStyle}>
            <h5 style={{marginLeft: '15px'}}>{user}</h5>
          </div>
          <div>
            <input style={messageContainerStyle} type="text" />
          </div>
          <button style={buttonStyle} className="button small radius">Send Message</button>
        </div>
      </div>
    );
  }
}
