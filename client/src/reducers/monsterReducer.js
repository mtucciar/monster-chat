import * as types from '../constants/UserActionTypes';

const initialState = {
  users: [1],
  usersById: [],
  chatLog: []
};

const monsterReducer = (state = initialState, action) => {
  console.log('zxczxc');
  console.log(state);
  console.log(action);
  switch (action.type) {
    case types.ADD_USER:
      const newId = state.users[state.users.length-1] + 1;
      return {
        ...state,
        users: state.users.concat(newId),
        usersById: [
          ...state.usersById,
          {
            id: newId,
            name: action.name
          }
        ],
      }
    case types.ADD_MESSAGE:
      const messageNum = state.chatLog.length + 1;
      return {
        ...state,
        chatLog: [
          ...state.chatLog,
          {
            messageNum: messageNum,
            name: action.name,
            message: action.message
          }
        ]
      }
    case types.ADD_RESPONSE:
      const messageNum2 = state.chatLog.length + 1;
      return {
        ...state,
        chatLog: [
          ...state.chatLog,
          {
            messageNum: messageNum2,
            name: action.name,
            message: action.message
          }
        ]
      }
    default:
      return state;
  }
}

export default monsterReducer
