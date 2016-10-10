import * as actions from './constants/UserActionTypes';
import { addResponse } from './actions/UserActions';
import React from 'react';
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);
    if (socket && action.type === actions.ADD_MESSAGE) {
      console.log('client: socket catching message');
      let chatLog = store.getState().monsterReducer.chatLog;
      console.log(chatLog);
      socket.emit('message', chatLog[chatLog.length -1]);
    }

    return result;
  };
}

export default function (store) {
  console.log('setting up client connection');
  socket = io.connect('localhost:3000');

  socket.on('disconnect', function(){
    console.log('client: user disconnected');
  });

  socket.on('message', function(){
    console.log('client: user sent message');
  });

  socket.on('chat message', function(msg){
    console.log('client: recieved message: ' + msg.messageNum + ": " + msg.name + ": " + msg.message);
    store.dispatch(addResponse(msg.name, msg.message));
  });

}
