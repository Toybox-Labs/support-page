import React, { Component } from 'react';
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'
import { strings } from '../strings';

class AccountTroubleshoot extends Component {

  data = [
    {
      title : strings.ChangePasswordTitle, 
      body: strings.ChangePasswordP1,
      link: ToyboxNavigationHelpers.getToyboxProfileURL(),
      linkText: strings.ChangePasswordL1
    },
    {
      title : strings.ForgotPasswordTitle, 
      body: strings.ForgotPasswordP1,
      link: ToyboxNavigationHelpers.getToyboxResetPasswordURL(),
      linkText: strings.ForgotPasswordL1 + ' ' + strings.ForgotPasswordP2
    },
    {
      title: strings.BirthdayTitle,
      body: strings.BirthdayP1,
      link:"https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule",
      linkText: strings.BirthdayL1
    },
    {
      title: strings.DisableAccountTitle,
      body: strings.DissableAccountP1 + '\n' + strings.DisableAccountP2 + '\n' + strings.DisableAccountP3,

    },
    {
      title: strings.FacebookProblemTitle,
      body: strings.FacebookProblemP1,
      link: ToyboxNavigationHelpers.getContactURL(),
      linkText: strings.FacebookProblemL1
    },

  ]
  renderItem(params, index)
  {
    let {title, body, link, linkText} = params
    let lines = body.split('\n')
    if(lines.length > 1)
    {
       body = body.split('\n').map((item, i) => {
            return  <p>{item}</p>;
        })
    }
   
    return <div className="issue-sec" id={`atq${1}`}> 
          <TroubleshootQuestionTitle title={title} metaobject={this} />
            <div className="sec-body" key={index}>
              <p>
                {body} 
                {link && <a className="blue-link" href={link} target="_blank">{' ' + linkText}</a>}
              </p>
            </div>
          </div>
  }
  render() {





    return (
      <div>
        <div className="title">{strings.AccountTitle}</div>
        <div className="title-sep"></div>
        {this.data.map(this.renderItem.bind(this))}
      </div>
    );
  }
}

export default AccountTroubleshoot;
