import * as types from '../constants/UserActionTypes';

export function addUser(name) {
  return {
    type: types.ADD_USER,
    name
  };
}

export function addMessage(name, message) {
  return {
    type: types.ADD_MESSAGE,
    name,
    message
  };
}

export function addResponse(name, message) {
  return {
    type: types.ADD_RESPONSE,
    name,
    message
  };
}
