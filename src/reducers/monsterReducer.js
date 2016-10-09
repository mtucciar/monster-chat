import * as types from '../constants/UserActionTypes';

const initialState = {
  users: [1],
  usersById: [
    {
      id: '1',
      name: 'theCoolestUser'
    }
  ],
  chatLog: [{messageNum: '1', name: 'theCoolestUser', message: 'hello'}]
};

const monsterReducer = (state = initialState, action) => {
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

export default monsterReducer
