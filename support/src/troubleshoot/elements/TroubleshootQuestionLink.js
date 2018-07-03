import React, { Component } from 'react';


class TroubleshootQuestionLink extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    this.setState({
      section:false
    })
  }
  getLink(){
    let link = window.location.origin + window.location.pathname
    let id = this.props.questionId
    let section = this.props.metaobject.props.section
    if(id){
      link += '#section=' + section + '&question=' + id
    }
    return link
  }
  copyToClipboard(event) {
    let input = document.createElement('textarea');
    input.id = 'tempTextarea';
    input.value = this.getLink()
    let oBody = document.getElementsByTagName("BODY")[0];
    oBody.appendChild(input)
    let copyText = document.getElementById('tempTextarea');
    copyText.select();
    document.execCommand("Copy");
    copyText.parentNode.removeChild(copyText)
    this.setState({
      clicked:true
    })
  }
  render() {
    let click = this.state ? this.state.clicked : false
    let iconClassName = click ? 'fa fa-check-circle' : 'fa fa-files-o'
    let addMessage = click ? <div className="bg-info">Copied to your clipboard!</div> : ''
    return (
      <div>
        <div className="issue-link">
          <div className="link-icon-wrapper" onClick={this.copyToClipboard.bind(this)}>
            <i className={iconClassName}></i>
          </div>
          <div className="link-wrapper" id="{{getLinkWrapperId}}">
            <a href={this.getLink()}>{this.getLink()}</a>
          </div>
        </div>
        {addMessage}
      </div>
    );
  }
}

export default TroubleshootQuestionLink;
