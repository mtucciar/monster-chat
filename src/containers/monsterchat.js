import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddUserInput from '../components/AddUserInput.js';
import ChatLog from '../components/ChatLog.js';
import SendMessage from '../components/SendMessage.js';

@connect(state => ({
  chatLog: state.chatLog,
  usersById: state.usersById
}))

export default class MonsterChat extends Component {

  static propTypes = {
    chatLog: PropTypes.object.isRequired,
    usersById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {

    const { chatLog: { chatLog }, usersById: { usersById }, dispatch } = this.props;

    return (
      <div className="row">
        <div className="small-6 columns">
          <AddUserInput/>
          {this.props.usersById.map(user =>
            {
              return (<SendMessage
                userName={user.name}
                {...this.props.actions}/>);
            })
          }
        </div>
        <div className="small-5 columns end">
          <ChatLog chatLog={chatLog}/>
        </div>
      </div>
    );
  }
}
