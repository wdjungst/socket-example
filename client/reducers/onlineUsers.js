const onlineUsers = ( state = [], action ) => {
  switch (action.type) {
    case 'ALL_USERS_ONLINE':
      let users = action.users.map( user => {
        return user
      });
      return users
    case 'USER_ONLINE':
      if (!state.find( u => u.id === action.user.id ))
        return [...state, action.user]
      return state
    case 'USER_OFFLINE':
      return state.filter( u => u.id !== action.id )
    default:
      return state;
  }
}

export default onlineUsers;
