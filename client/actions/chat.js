export const newUserOnline = (user) => {
  return { type: 'USER_ONLINE', user } 
}

export const userWentOffline = (id) => {
  return ({ type: 'USER_OFFLINE', id });
}
