import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions/UserActions';

let UserPanel = ({ dispatch, userName }) => {

  let input

  return (
      <div className="row">
        <div style={{
          display: 'inline-block',
          marginTop: '20px',
          border: 'solid black 1px',
          borderRadius: '15px',
          padding: '0'
        }} className="small-8 small-offset-2 columns end">
          <div style={{
            background: 'grey',
            color: 'white',
            width: '100%',
            marginTop: '-3px',
            borderTopLeftRadius: '13px',
            borderTopRightRadius: '13px',
          }}>
            <h5 style={{marginLeft: '15px'}}>{userName}</h5>
          </div>
          <form onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                  return
              }
              dispatch(addMessage(userName, input.value))
              input.value = '';
          }}>
            <div>
              <textarea style={{
                width: '90%',
                height: '100px',
                marginLeft: '15px',
                marginBottom: '15px',
                resize: 'none'
              }} ref={node => {
            input = node
          }}></textarea>
            </div>
            <button style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: '15px'
            }} className="button small radius" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
}

UserPanel = connect()(UserPanel)

export default UserPanel
