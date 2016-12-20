export const newUserOnline = (user) => {
  return { type: 'USER_ONLINE', user } 
}

export const userWentOffline = (id) => {
  return ({ type: 'USER_OFFLINE', id });
}

export const onlineUsers = (userId) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/online_users',
      type: 'GET',
      dataType: 'JSON'
    }).done( users => {
      dispatch({ type: "ALL_USERS_ONLINE", users });
    });
  }
}
