import React, { Component } from 'react';
import TroubleshootQuestionLink from '../components/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'
import { strings } from '../strings';

class AccountTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">{strings.AccountTitle}</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="atq1">
          <TroubleshootQuestionTitle title={strings.ChangePasswordTitle} metaobject={this} />
          <div className="sec-body">
            <p>
              {strings.ChangePasswordP1} <a className="blue-link" href={ToyboxNavigationHelpers.getToyboxProfileURL()} target="_blank">{strings.ChangePasswordL1}</a>.
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq1" section="account"/>
          </div>
        </div>

        <div className="issue-sec" id="atq2">
          <TroubleshootQuestionTitle title={strings.ForgotPasswordTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
            {strings.ForgotPasswordP1} <a className="blue-link" href={ToyboxNavigationHelpers.getToyboxResetPasswordURL()}>{strings.ForgotPasswordL1}</a> {strings.ForgotPasswordP2}
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq2" section="account"/>
          </div>
        </div>

        <div className="issue-sec" id="atq3">
          <TroubleshootQuestionTitle title={strings.BirthdayTitle} metaobject={this} />
          <div className="sec-body">
            <p>
              {strings.BirthdayP1} <a className="blue-link" href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" target="_blank">{strings.BirthdayL1}</a>
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq3" section="account"/>
          </div>
        </div>
        <div className="issue-sec" id="atq4">
            <TroubleshootQuestionTitle title={strings.DisableAccountTitle} metaobject={this} />
          <div className="sec-body">
            <p>{strings.DisableAccountP1}</p>
            <p>{strings.DisableAccountP2}</p>
            <p>{strings.DisableAccountP3}</p>
            <TroubleshootQuestionLink metaobject={this}  questionId="atq4" section="account"/>
          </div>
        </div>
        <div className="issue-sec" id="atq5">
          <TroubleshootQuestionTitle title={strings.FacebookProblemTitle} metaobject={this} />
          <div className="sec-body">
            {strings.FacebookProblemP1} <a className="crete-using-fb-problems blue-link">{strings.FacebookProblemL1}</a>.
            <TroubleshootQuestionLink metaobject={this}  questionId="atq5" section="account"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountTroubleshoot;
