import React, { Component } from 'react';
import AccountTroubleshoot from '../sections/AccountTroubleshoot'
import MechanicalTroubleshoot from '../sections/MechanicalTroubleshoot'
import PrintQualityTroubleshoot from '../sections/PrintQualityTroubleshoot'
import SetupTroubleshoot from '../sections/SetupTroubleshoot'
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'

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
        <div className="center-div">
          <i className="fa fa-github"></i> This page is open source. Check out our repo <a href={ToyboxNavigationHelpers.getGithubRepoURL()}>here</a>.
        </div>
        <div className="small-divider"></div>
        <div className="center-div">
          Are we missing something? You can post an issue <a href={ToyboxNavigationHelpers.getGithubNewIssueURL()}>here</a>
        </div>

      </div>
    );
  }
}

export default MainTroubleshootPage;
