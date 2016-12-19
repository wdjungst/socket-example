import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.addChannel = this.addChannel.bind(this);
  }

  componentDidMount() {
    //Get all channels
  }

  addChannel() {
    //ajax call
    this.input.value = null;
    //update redux
  }

  render() {
    let channels = this.props.channels.map( c => {
      return (
        <li className="collection-item" key={c.id}>
          <Link to={`/channels/${c.id}`}>{c.name}</Link>
        </li>
      )
    });
    return (
      <div>
        <input ref={ n => this.input = n } />
        <button className="btn" onClick={this.addChannel}>Create Channel</button>
        <ul className="collection">
          {channels}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { channels: state.channels }
}

export default connect(mapStateToProps)(ChannelList)
