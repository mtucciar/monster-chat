import React, { Component, PropTypes } from 'react';

const ChatLog = ({ logMessages }) => (
      <div className="row">
        <div className="small-12 columns">
          <div style={{border: 'solid black 1px'}} className="panel radius">
            <h5>Chat Log</h5>
            <hr/>
            {logMessages.map(userMessage => <p>{userMessage.name}: {userMessage.message}</p>)}
          </div>
        </div>
      </div>
)

ChatLog.propTypes = {
  logMessages: PropTypes.arrayOf(PropTypes.shape({
    messageNum: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ChatLog
