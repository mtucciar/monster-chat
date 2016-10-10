import React, { PropTypes } from 'react'
import UserPanel from '../components/UserPanel'

const UserPanels = ({ users, addMessageClick }) => (
  <div>
    {users.map(user =>
      <UserPanel
        key={user.id}
        userName={user.name}
        onClick={() => addMessageClick(user.name, user.userMessage)}
      />
    )}
  </div>
)

UserPanels.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  addMessageClick: PropTypes.func.isRequired
}

export default UserPanels
