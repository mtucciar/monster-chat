import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/UserActions'
import UserPanels from '../components/UserPanels'

const mapStateToProps = (state) => {
  console.log(state);
  console.log('asd');
  return {
    users: state.monsterReducer.usersById
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMessageClick: (name, message) => {
      dispatch(addMessage(name, message))
    }
  }
}

const VisibleUserPanels = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanels)

export default VisibleUserPanels
