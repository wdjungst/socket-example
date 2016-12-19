import React from 'react';
import { connect } from 'react-redux';

const OnlineUsers = ({ onlineUsers }) => {
  let users = onlineUsers.map( u => {
    return (
      <li key={u.id} className="collection-item">
        {`${u.first_name} ${u.last_name}`}
      </li>
    )
  });
  return (
    <div>
      <h3 className="center">Online Users</h3>
      <ul className="collection">
        {users}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { onlineUsers: state.onlineUsers }
}

export default connect(mapStateToProps)(OnlineUsers);
