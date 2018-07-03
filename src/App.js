import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Troubleshoot from './troubleshoot/Troubleshoot'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Troubleshoot />
      </div>
    );
  }
}

export default App;
