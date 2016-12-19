const channels = ( state = [], action ) => {
  switch (action.type) {
    case 'ALL_CHANNELS':
      return action.channels;
    case 'ADD_CHANNEL':
      return [...state, action.channel]
    default:
      return state;
  }
}

export default channels;
