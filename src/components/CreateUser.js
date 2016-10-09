import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions';

let CreateUser = ({ dispatch }) => {

  let input

  return (
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addUser(input.value))
            input.value = ''
        }}>
          <div className="row">
            <div className="small-8 small-offset-2 columns">
              <div className="row collapse">
                <div className="small-8 columns">
                  <input type="text" autoFocus="true" ref={node => {
                input = node
                    }}  placeholder="Add a user"/>
                </div>
                <div className="small-4 columns">
                  <button className="button postfix"value="Add User" type="submit">Add User</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}

CreateUser = connect()(CreateUser)

export default CreateUser
