import React, { Component } from 'react';
import TroubleshootQuestionLink from '../components/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'

class AccountTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">Account</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="atq1">
          <TroubleshootQuestionTitle title="How do I change my password?" metaobject={this} />
          <div className="sec-body">
            <p>
              You can find the option to change your password on your <a className="blue-link" href={ToyboxNavigationHelpers.getToyboxProfileURL()} target="_blank">profile view</a>.
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq1"/>
          </div>
        </div>

        <div className="issue-sec" id="atq2">
          <TroubleshootQuestionTitle title="How do I change my password if I forgot it?" metaobject={this}/>
          <div className="sec-body">
            <p>
              When you click sign in, there is an option there that says "I forgot my password". <a className="blue-link" href={ToyboxNavigationHelpers.getToyboxResetPasswordURL()}>This link</a> will take you to the flow.
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq2"/>
          </div>
        </div>

        <div className="issue-sec" id="atq3">
          <TroubleshootQuestionTitle title="Why do I have to provide my birthday?" metaobject={this} />
          <div className="sec-body">
            <p>
              We need to get your birthday in order to make sure that we comply with Child Online Protection Act (COPA). COPPA imposes certain requirements on operators of websites or online services directed to children under 13 years of age. You can learn more about COPA <a className="blue-link" href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" target="_blank">here</a>.
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="atq3"/>
          </div>
        </div>
        <div className="issue-sec" id="atq4">
            <TroubleshootQuestionTitle title="How do I disable my child's account?" metaobject={this} />
          <div className="sec-body">
            <p>At Toybox, we keep as little data as possible to protect your childs privacy. However, we keep some data in order to allow your child to use their printer. This includes hosting their toy designs on our website so that they can be sent to their printer.</p>
            <p>We want to make sure you have control over any data we keep for your child. If at anytime you want us to remove information about your child or would like to know more, please send an email to support@make.toys and one of our friendly Toybox assistants will help you. :)</p>
            <p>If you don't approve of your child's membership registration, send an email to support@make.toys.</p>
            <TroubleshootQuestionLink metaobject={this}  questionId="atq4"/>
          </div>
        </div>
        <div className="issue-sec" id="atq5">
          <TroubleshootQuestionTitle title="I can't create an account through Facebook" metaobject={this} />
          <div className="sec-body">
            If you are having issues, please send us an email through <a className="crete-using-fb-problems blue-link">here</a>.
            <TroubleshootQuestionLink metaobject={this}  questionId="atq5"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountTroubleshoot;
