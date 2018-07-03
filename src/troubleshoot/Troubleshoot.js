import React, { Component } from 'react';
import TroubleshootNavigationPanel from './elements/TroubleshootNavigationPanel'
import MainTroubleshootPage from './elements/MainTroubleshootPage'

class Troubleshoot extends Component {
  constructor(){
    super()
    this.handleNavigationSectionClick = this.handleNavigationSectionClick.bind(this);
  }
  handleNavigationSectionClick(event) {
    this.setState({
      section:event.target.classList[1]
    })
  }
  componentDidMount(){
    this.setState({
      section:'account'
    })
  }
  render() {
    let section = this.state ? this.state.section : 'account'
    return (
      <div className="troubleshoot troubleshootRoute">
        <div className="left-panel">
          <TroubleshootNavigationPanel handleNavigationSectionClick={this.handleNavigationSectionClick} selectedSection={section}/>
        </div>
        <div className="right-panel">
          <MainTroubleshootPage section={section}/>
        </div>
      </div>
    );
  }
}

export default Troubleshoot;
