import React, { Component } from 'react';
import TroubleshootNavigationPanel from './components/TroubleshootNavigationPanel'
import MainTroubleshootPage from './components/MainTroubleshootPage'
import './Troubleshoot.css';
class Troubleshoot extends Component {
  constructor(){
    super()
    this.handleNavigationSectionClick = this.handleNavigationSectionClick.bind(this);
  }
  handleNavigationSectionClick(event) {
    let section;
    if(event.target){
      if(event.target.nodeName === 'SELECT'){
        section = event.target.value
      } else {
        section = event.target.classList[1]
      }
    }
    this.setState({
      section:section
    })
  }
  componentDidMount(){
    this.setState({
      section:'account'
    })
  }
  render() {
    let section = this.state ? this.state.section : 'account'
    const navigationSections = [
      {
        name:'Setup'
        , id: 'setup'
      }
      , {
        name:'Print Quality'
        , id: 'quality'
      }
      , {
        name:'Mechanical'
        , id: 'mechanical'
      }
      , {
        name:'Account'
        , id: 'account'
      }
    ]
    return (
      <div className="troubleshoot troubleshootRoute">
        <div className="left-panel">
          <TroubleshootNavigationPanel handleNavigationSectionClick={this.handleNavigationSectionClick} selectedSection={section} navSections={navigationSections}/>
        </div>
        <div className="right-panel">
          <MainTroubleshootPage handleNavigationSectionClick={this.handleNavigationSectionClick}  section={section} navSections={navigationSections}/>
        </div>
      </div>
    );
  }
}

export default Troubleshoot;
