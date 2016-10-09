import React, { Component, PropTypes } from 'react';

const AddUserInput = ({ onClick }) => (
      <div>
        <form>
          <div className="row">
            <div className="small-8 small-offset-2 columns">
              <div className="row collapse">
                <div className="small-8 columns">
                  <input type="text" autoFocus="true" placeholder="Add a user"/>
                </div>
                <div className="small-4 columns">
                  <button className="button postfix"value="Add User" onClick={onClick}>Add User</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
)

AddUserInput.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddUserInput
