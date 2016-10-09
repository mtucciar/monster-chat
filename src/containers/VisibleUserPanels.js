import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions'
import UserPanels from '../components/UserPanels'

const mapStateToProps = (state) => {
  console.log(state);
  console.log('asd');
  return {
    users: state.monsterReducer.usersById
  }
}

const VisibleUserPanels = connect(
  mapStateToProps
)(UserPanels)

export default VisibleUserPanels
