import React from 'react';
import { connect } from 'react-redux';
import ChannelList from './ChannelList';
import OnlineUsers from './OnlineUsers';
import { newUserOnline, userWentOffline, onlineUsers } from '../actions/chat';

class Lobby extends React.Component {
  componentDidMount() {
    if ( typeof App !== 'undefined' ) {
      App.users = App.cable.subscriptions.create({ channel: 'OnlineUsersChannel'}, {
        connected: function(data) {
          setTimeout( () => { this.online(); }, 1000 )
        },
        disconnected: function() {},
        received: (data) => {
          switch (Object.keys(data)[0]) {
            case 'online':
              let user = data.online;
              if (user.id !== this.props.user.id) {
                this.props.dispatch(newUserOnline(user));
              }
              break;
            case 'offline':
              debugger
              let { id } = data.offline;
              this.props.dispatch(userWentOffline(id))
              break;
          }
        },
        online: function() {
          return this.perform('online')
        }
      });
    }
    this.props.dispatch(onlineUsers(this.props.user.id));
  }

  componentWillUnmount() {
    if ( typeof App !== 'undefined' ) {
      App.users.unsubscribe()
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col m6">
          <ChannelList />
        </div>
        <div className="col m6">
          <OnlineUsers />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Lobby)
