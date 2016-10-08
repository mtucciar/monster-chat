import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MonsterChat from './MonsterChat';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {

    var headingStyle = {
        textAlign: 'center',
        marginBottom: '25px'
    }

    return (
      <div>
        <h1 style={headingStyle}>Monster Chat</h1>
          <div>
            <MonsterChat/>
          </div>
      </div>
    );
  }
}
