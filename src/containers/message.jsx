import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities, selectCity } from '../actions';
import City from '../containers/city';
