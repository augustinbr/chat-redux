import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMessagesAction from '../actions/fetchMessages';
import { getMessagesPending, getMessages, getMessagesError } from '../reducers/messages-list-reducer';

import { selectChannel } from '../actions';
// import City from '../containers/city';


class ListMessages extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchMessages } = this.props;
    console.log(fetchMessages());
    console.log(this.props.selectedChannel);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { messages, error, pending } = this.props;
    return (
      <div className="messages__list">
        <div className="channel border-bottom">$
          <h1>{this.props.selectedChannel}</h1>
        </div>
        <div className="message">
          {error && <span>{error}</span>}
          <h1>{messages}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getMessagesError(state),
  products: getMessages(state),
  pending: getMessagesPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMessages: fetchMessagesAction
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ListMessages);

