import React, { Component } from 'react';
import TroubleshootQuestionLink from '../components/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import { strings } from '../strings';

class PrinterQualityTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">{strings.PrintQualityTitle}</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="pqq1">
          <TroubleshootQuestionTitle title={strings.MissingLayersTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.MissingLayersP1}
            </p>
            <p>
              {strings.MissingLayersP2}
            </p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_correct_way_to_load_printer_food_roll.JPG"/>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_wrong_way_to_load_printer_food_roll.JPG"/>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq1" section="quality"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq2">
          <TroubleshootQuestionTitle title={strings.WarpedLayersTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.WarpedLayersP1}
            </p>
            <p>
              {strings.WarpedLayersP2}
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq2" section="quality"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq3">
          <TroubleshootQuestionTitle title={strings.NoStickTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.NoStickP1}
            </p>
            <div>
              There are two fairly quick fixes for this:<br/>
              <ol>
                <li>
                    {strings.NoStickL1}
                    <br/>
                    <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/TroubleshootingScrew.jpg"/>
                </li>
                <li>{strings.NoStickL2}</li>
              </ol>
              <p>{strings.NoStickP3}</p>
              <p>
                <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/>
              </p>
            </div>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq3" section="quality"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq4">
          <TroubleshootQuestionTitle title={strings.BlobbyTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.BlobbyP1}
            </p>
            <p>
              {strings.BlobbyP2}
            </p>
            <p>
              {strings.BlobbyP3}
            </p>
            <p>
              {strings.BlobbyP4}
            </p>
            <p>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/>
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq4" section="quality"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq5">
          <TroubleshootQuestionTitle title={strings.ShiftingTitle} metaobject={this}/>
          <div className="sec-body">
            <p>
              {strings.ShiftingP1}
            </p>
            <div className="issue-subsec">
              <TroubleshootQuestionTitle title={strings.ShiftingSubtitle1} isChildSection={true} metaobject={this}/>
              <div className="subsec-body">
                <div>
                  <p>
                    {strings.ShiftingSubtitle1P1}
                  </p>
                  <p>
                    {strings.ShiftingSubtitle1P2}
                  </p>
                </div>
              </div>
            </div>

            <div className="issue-subsec">
              <TroubleshootQuestionTitle title={strings.ShiftingSubtitle2} isChildSection={true} metaobject={this}/>
              <div className="subsec-body">
                <div>
                  <p>
                    {strings.ShiftingSubtitle2P1}
                  </p>
                  <p>
                    {strings.ShiftingSubtitle2P2}
                  </p>
                </div>
                <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_correct_way_to_load_printer_food_roll.JPG"/>
                <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_wrong_way_to_load_printer_food_roll.JPG"/>
              </div>
            </div>

            <div className="issue-subsec">
              <TroubleshootQuestionTitle title={strings.ShiftingSubtitle3} isChildSection={true} metaobject={this}/>
              <div className="subsec-body">
                <div>
                  <p>
                    {strings.ShiftingSubtitle3P1}
                  </p>
                </div>
              </div>
            </div>

            <TroubleshootQuestionLink metaobject={this} questionId="pqq5" section="quality"/>

          </div>
        </div>
      </div>
    );
  }
}

export default PrinterQualityTroubleshoot;
