import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBarContainer from './navbar/NavBar'
import Troubleshoot from './troubleshoot/Troubleshoot'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="desktop-nav">
          <NavBarContainer/>
        </nav>
        <div style={{paddingTop:'80px'}}>
          <Troubleshoot />
        </div>
      </div>
    );
  }
}

export default App;
