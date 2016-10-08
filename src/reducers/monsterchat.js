import * as types from '../constants/UserActionTypes';

const initialState = {
  users: [1],
  usersById: {
    1: {
    id: "1",
    name: 'theCoolestUser'}
  },
  chatLog: [{name: "theCoolestUser", message: "hello!"}]
};

export default function users(state = initialState, action) {
  switch (action.type) {

    case types.ADD_USER:
      const newId = state.users[state.users.length-1] + 1;
      return {
        ...state,
        users: state.users.concat(newId),
        usersById: {
          ...state.usersById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.ADD_MESSAGE:
      return {
        ...state,
        chatLog: [
          ...state,
          {
            user: action.name,
            message: action.message
          }
        ]
      }

    default:
      return state;
  }
}
