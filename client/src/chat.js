import * as actions from './actions/UserActions';
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (socket && action.type === actions.ADD_MESSAGE) {
      let chatLog = store.getState().chatLog;
      socket.emit('message', chatLog[chatLog.length -1]);
    }

    return result;
  };
}

export default function (store) {
  socket = io.connect(`${location.protocol}//${location.host}`);

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });

}
