import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions'
import UserPanel from '../components/UserPanel'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.monsterReducer.usersById
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (name) => {
      dispatch(addMessage(name, message))
    }
  }
}

const VisibleUserPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel)

export default VisibleUserPanel
