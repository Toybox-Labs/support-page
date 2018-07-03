import React, { Component } from 'react';
import AccountTroubleshoot from '../sections/AccountTroubleshoot'
import MechanicalTroubleshoot from '../sections/MechanicalTroubleshoot'
import PrintQualityTroubleshoot from '../sections/PrintQualityTroubleshoot'
import SetupTroubleshoot from '../sections/SetupTroubleshoot'

class MainTroubleshootPage extends Component {
  render() {
    let component;
    switch(this.props.section){
      case 'mechanical':
        component = <MechanicalTroubleshoot section={this.props.section}/>
        break;
      case 'quality':
        component = <PrintQualityTroubleshoot section={this.props.section}/>
        break;
      case 'setup':
        component = <SetupTroubleshoot section={this.props.section}/>
        break;
      default:
        component = <AccountTroubleshoot section={this.props.section}/>
    }
    return (
      <div className="main-troubleshoot">
        {component}
        <div className="center-div" >
          Not finding an answer? <a href="" className="normal-a-link">Contact us</a>.
        </div>
      </div>
    );
  }
}

export default MainTroubleshootPage;
