import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { listChannels, selectChannel } from '../actions/index';

// import City from '../containers/city';


class ListChannels extends Component {
  componentWillMount() {
    console.log(this.props.selectChannel("general"));
  }

  handleClick = (event) => {
    console.log(event);
    console.log(this.props.selectChannel(event.target.value));
  }

  render() {
    return (
      <div className="channels__list list" >
        <h2>Redux Chat</h2>
        {this.props.channelsList.map((channel) => {
          return (
            <div className="list" key={channel} onClick={this.handleClick}>
              <h4 >{channel}</h4>
            </div>
          );
        })
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      listChannels,
      selectChannel
    }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    channelsList: state.channels,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListChannels);
