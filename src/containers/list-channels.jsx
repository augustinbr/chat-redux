import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { listChannels } from '../actions';
// import City from '../containers/city';


class ListChannels extends Component {

  componentWillMount() {
    this.props.listChannels();
  }

  render() {
    return (
      <div className="channels__list" key={channel}>
        {this.props.channelsList.map((channel) => {
          return (
            <h2>{channel}</h2>
          );
        })
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { listChannels: listChannels },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channelsList: state.channels
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListChannels);
