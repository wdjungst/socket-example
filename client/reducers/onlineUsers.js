const onlineUsers = ( state = [], action ) => {
  switch (action.type) {
    case 'ALL_USERS_ONLINE':
      return action.users;
    case 'USER_ONLINE':
      return [...state, action.user]
    case 'USER_OFFLINE':
      return state.filter( u => u.id !== action.id )
    default:
      return state;
  }
}

export default onlineUsers;
