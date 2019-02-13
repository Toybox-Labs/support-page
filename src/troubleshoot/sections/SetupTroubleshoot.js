import React, { Component } from 'react';
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import { strings } from '../strings';
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'

class SetupTroubleshoot extends Component {

  moreSections = [
    {
      title: strings.ImportToys,
      body: strings.ImportToysBody,

      linkText: strings.CreatorSpace,
      link: ToyboxNavigationHelpers.getCutomToysURL(),
      videoLink: "https://www.youtube.com/watch?v=hb9yDY0GRfY"
    },
    {
      title: strings.DrawMode,
      body: strings.DrawModeBody,

      linkText: strings.CreatorSpace,
      link: ToyboxNavigationHelpers.getCutomToysURL(),
    },

    {
      title: strings.cantFindCode,
      body: strings.cantFindCodeBody,
    }
  ]


  renderItem(params, index)
  {
    let {title, body, link, linkText, videoLink} = params
    let lines = body.split('\n')
    if(lines.length > 1)
    {
       body = body.split('\n').map((item, i) => {
            return  <p>{item}</p>;
        })
    }
   
    return <div className="issue-sec" id={`pqq${index+6}`}> 
          <TroubleshootQuestionTitle title={title} metaobject={this} />
            <div className="sec-body" key={index}>
              <p>
                {body} 
                {link && <a className="blue-link" href={link} target="_blank">{' ' + linkText}</a>}
                {videoLink && <span><p><a className="blue-link" href={link} target="_blank">{' ' + strings.video}</a></p></span>}
              </p>
            </div>
          </div>
  }
  render() {
    return (
      <div>
        <div className="title">{strings.SetupTitle}</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="sq1">
          <TroubleshootQuestionTitle title={strings.CannotConnectTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.CannotConnectP1}
            </p>
            <ol>
              <li>
                {strings.CannotConnectL1}
              </li>
              <li>
                {strings.CannotConnectL2}
              </li>
              <li>
                {strings.CannotConnectL3}
              </li>
              <li>
                {strings.CannotConnectL4}
              </li>
              <li>
                {strings.CannotConnectL5}
              </li>
              <li>
                {strings.CannotConnectL6}
              </li>
              <li>
                {strings.CannotConnectL7}
              </li>
              <li>
                {strings.CannotConnectL8}
              </li>
            </ol>
          </div>
        </div>

        <div className="issue-sec" id="sq2">
          <TroubleshootQuestionTitle title={strings.NoHomeNetworkTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.NoHomeNetworkP1}
            </p>
            <p>
              {strings.NoHomeNetworkP2}
            </p>
            <ol>
              <li> {strings.NoHomeNetworkL1} </li>
              <li> {strings.NoHomeNetworkL2} </li>
              <li> {strings.NoHomeNetworkL3} </li>
              <li> {strings.NoHomeNetworkL4} </li>
            </ol>
          </div>
        </div>

        <div className="issue-sec" id="sq3">
          <div className="sec-body">
            <p>
              {strings.NoCodeP1}
            </p>
            <ol>
              <li>{strings.NoCodeL1}</li>
              <li>{strings.NoCodeL2}</li>
            </ol>
            <p> {strings.NoCodeP2}</p>
          </div>
        </div>

        <div className="issue-sec" id="sq4">
          <TroubleshootQuestionTitle title={strings.StuckOnLoadingTitle} metaobject={this}/>

          <div className="sec-body">
            <p>{strings.StuckOnLoadingP1}</p>
            <p>{strings.stuckLoadingBody}<a className="blue-link contact-link-problems" href={ToyboxNavigationHelpers.getFactoryResetLink()}>{" " +strings.factoryReset}</a></p>
          </div>
        </div>
        <div className="issue-sec" id="sq5">
          <TroubleshootQuestionTitle title={strings.NoFindAppTitle} metaobject={this}/>
          <div className="sec-body">
            <p>{strings.NoFindAppP1} <a className="blue-link" href="https://itunes.apple.com/us/app/toybox-3d-print-your-own-toys!/id1166269606?ls=1&mt=8" target="_blank">{strings.NoFindAppA1}</a> {strings.NoFindAppP2}<a className="blue-link" href="https://play.google.com/store/apps/details?id=com.toybox" target="_blank">{strings.NoFindAppA2}</a>.</p>
            <p> {strings.NoFindAppP3} </p>
          </div>
        </div>
        <div className="issue-sec" id="sq6">
          <TroubleshootQuestionTitle title={strings.NoDesktopAppTitle} metaobject={this}/>
          <div className="sec-body">
            <p>{strings.NoDesktopAppP1}<a className="blue-link" href="/toys" target="_blank">{strings.NoDesktopAppA1}</a> {strings.NoDesktopAppP2} <a className="blue-link" href="/custom-toys" target="_blank">{strings.NoDesktopAppA2}</a>{strings.NoDesktopAppP3}</p>
          </div>
        </div>
        <div className="issue-sec" id="sq7">
          <TroubleshootQuestionTitle title={strings.NoDriversTitle} metaobject={this}/>
          <div className="sec-body">
            <p>{strings.NoDriversP1}</p>
          </div>
        </div>
        {this.moreSections.map(this.renderItem.bind(this))}

      </div>
    );
  }
}

export default SetupTroubleshoot;
