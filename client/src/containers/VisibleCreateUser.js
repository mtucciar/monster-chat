import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions'
import CreateUser from '../components/CreateUser'

const mapDispatchToProps = (dispatch, name) => {
  return {
    onClick: (name) => {
      dispatch(addUser(name))
    }
  }
}

const VisibleCreateUser = connect(
  null,
  mapDispatchToProps
)(CreateUser)

export default VisibleCreateUser
