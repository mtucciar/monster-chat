import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddUserInput from '../components/AddUserInput.js';
import ChatLog from '../components/ChatLog.js';
import SendMessage from '../components/SendMessage.js';
// import * as UserActions from '../actions/UserActions';

// @connect(state => ({
//   chatLog: state.chatLog
// }));

export default class MonsterChat extends Component {

  // static propTypes = {
  //   usersById: PropTypes.object.isRequired,
  //   dispatch: PropTypes.func.isRequired
  // }

  render () {

    // const { chatLog: { usersById }, dispatch } = this.props;
    // const actions = bindActionCreators(UserActions, dispatch);

    return (
      <div className="row">
        <div className="small-6 columns">
          <AddUserInput/>
        </div>
        <div className="small-5 columns end">
          <ChatLog/>
        </div>
      </div>
    );
  }
}
