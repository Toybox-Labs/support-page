import React, { Component } from 'react';


class TroubleshootQuestionTitle extends Component {
  clickOnExpandable(event){
    let issue = event.currentTarget.parentNode
    let cssClass = event.currentTarget.className.indexOf('issue-title') != -1 ? 'sec-expand' : 'subsec-expand'
    if(issue){
      if(issue.className.indexOf(cssClass) == -1){
        issue.className += issue.className ? ' ' + cssClass : cssClass
      } else {
        issue.classList.remove(cssClass)
      }
    }
  }
  render() {
    let classNames = this.props.isChildSection ? 'subsec-title' : 'issue-title expandable'
    return (
      <div className={classNames} onClick={this.clickOnExpandable}>
        <i className="fa fa-plus p-sec"></i>
        <i className="fa fa-minus m-sec"></i>
        {this.props.title}
      </div>
    );
  }
}

export default TroubleshootQuestionTitle;
