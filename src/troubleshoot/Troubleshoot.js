import React, { Component } from 'react';
import TroubleshootNavigationPanel from './components/TroubleshootNavigationPanel'
import MainTroubleshootPage from './components/MainTroubleshootPage'
import './Troubleshoot.css';
import $ from "jquery"
import { strings } from './strings';

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
    window.location.hash = '#section=' + section
    this.setState({
      section:section
    })
  }
  componentDidMount(){
    this.setState({
      section:'account'
    })
  }
  parseURLParamsFromLocationObject(){
    let location = window.location
    let params = location.hash;
    let question, section;
    let sec_id, qid;
    if(params){
      params = params.substring(1)
      let posAnd = params.indexOf('&')
      if(posAnd != -1){
        section = params.substring(0, posAnd)
        question = params.substring(posAnd+1, params.length)
      } else {
        section = params
      }
    }
    if(section){
      let i = 0
      sec_id = section.substring(section.indexOf('=')+1)
    }
    if(question){
      qid = question.substring(question.indexOf('=')+1, question.length)
    }
    return {
      qid: qid
      , sec_id:sec_id
    }
  }

  addCSSClassToIssue = function(issue, cssClass){
    if(issue){
      if(issue.className.indexOf(cssClass) == -1){
        issue.className += issue.className ? ' ' + cssClass : cssClass
      } else {
        issue.classList.remove(cssClass)
      }
    }
  }

  componentDidMount() {
    let params = this.parseURLParamsFromLocationObject()
    let qid = params.qid
    let node = $('#'+qid)
    if(node && node.length >0){
      this.addCSSClassToIssue(node[0], 'sec-expand')
      $('html, body').stop().animate({
        scrollTop: $('#' + qid).offset().top
      }, 1000)
    }
  }

  render() {
    let params = this.parseURLParamsFromLocationObject()
    let section
    if(this.state && this.state.section){
      section = this.state ? this.state.section : 'account'
    } else if (params.sec_id ){
      section = params.sec_id
    }
    let expandedQuestion = params.qid
    const navigationSections = [
      {
        name: strings.SetupTitle
        , id: 'setup'
      }
      , {
        name:strings.PrintQualityTitle
        , id: 'quality'
      }
      , {
        name:strings.MechanicalTitle
        , id: 'mechanical'
      }
      , {
        name:strings.AccountTitle
        , id: 'account'
      }
    ]
    return (
      <div className="troubleshoot troubleshootRoute">
        <div className="left-panel">
          <TroubleshootNavigationPanel handleNavigationSectionClick={this.handleNavigationSectionClick} selectedSection={section} navSections={navigationSections}/>
        </div>
        <div className="right-panel">
          <MainTroubleshootPage handleNavigationSectionClick={this.handleNavigationSectionClick}
          section={section} navSections={navigationSections} expandedQuestion={expandedQuestion}/>
        </div>
      </div>
    );
  }
}

export default Troubleshoot;
