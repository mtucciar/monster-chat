import React, { Component, PropTypes } from 'react';

const ChatLog = ({ logMessages }) => (
      <div className="row">
        <div className="small-12 columns">
          <div style={{border: 'solid black 1px'}} className="panel radius">
            <h5>Chat Log</h5>
            <hr/>
            {logMessages.map(userMessage => <p key={userMessage.messageNum} style={{textOverflow: 'wrap', wordWrap: 'break-word'}}>{userMessage.name}: {userMessage.message}</p>)}
          </div>
        </div>
      </div>
)

ChatLog.propTypes = {
  logMessages: PropTypes.arrayOf(PropTypes.shape({
    messageNum: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ChatLog
