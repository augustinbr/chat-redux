import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { setCities, selectCity } from '../actions';
// import City from '../containers/city';

class ListMessages extends Component {

  render() {
    return (
      <div className="messages__list">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default ListMessages;
