import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions'
import AddUserInput from '../components/AddUserInput'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (name) => {
      dispatch(addUser(name))
    }
  }
}

const AddUser = connect(
  null,
  mapDispatchToProps
)(AddUserInput)

export default AddUser
