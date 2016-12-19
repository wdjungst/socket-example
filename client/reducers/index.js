import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import onlineUsers from './onlineUsers';
import channels from './channels';
import flash from './flash';

const rootReducer = combineReducers({ 
    routing: routerReducer,
    user,
    flash,
    onlineUsers,
    channels
});

export default rootReducer;

