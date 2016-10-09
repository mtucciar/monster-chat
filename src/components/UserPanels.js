import React, { PropTypes } from 'react'
import VisibleUserPanel from '../containers/VisibleUserPanel'

const UserPanels = ({ users, addMessageClick }) => (
  <ul>
    {users.map(user =>
      <VisibleUserPanel
        key={user.id}
        {...user}
        onClick={() => addMessageClick(user.userMessage)}
      />
    )}
  </ul>
)

UserPanels.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  addMessageClick: PropTypes.func.isRequired
}

export default UserPanels
