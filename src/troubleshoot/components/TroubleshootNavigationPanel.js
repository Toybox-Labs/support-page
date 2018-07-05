import React, { Component } from 'react';

class TroubleshootNavigationSection extends Component {
  render() {
    let classNames = 'nav-sec ' + this.props.navsec.id
    if(this.props.selectedSection == this.props.navsec.id){
      classNames += ' active-sec'
    }
    return (
      <div className={classNames} onClick={this.props.onClick}>
        {this.props.navsec.name}
      </div>
    )
  }
}


class TroubleshootNavigationPanel extends Component {
  render() {
    let navSections = this.props ? this.props.navSections : []
    let selectedSection = this.props ? this.props.selectedSection : 'account'
    return (
      <div className="t-nav-panel">
        {navSections.map(function(navsec, i){
          return <TroubleshootNavigationSection navsec={navsec} onClick={this} selectedSection={selectedSection}/>;
        }, this.props.handleNavigationSectionClick)}
      </div>
    );
  }
}

export default TroubleshootNavigationPanel;
