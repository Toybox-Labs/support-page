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
                    Every once in awhile there can be be a knot in the printer-food roll. This can prevent the printer-food roll from unrolling and properly feeding into the printer. Check the roll and make sure there isn’t a knot and you can freely roll and unroll the printer food roll by pulling lightly on the printer food sticking out of the roll.
                  </p>
                  <p>
                    If there is a knot, remove your printer food from the printer and undo the knot. The printer should then be ready to go!
                  </p>
                </div>
              </div>
            </div>

            <div className="issue-subsec">
              <TroubleshootQuestionTitle title={strings.ShiftingSubtitle2} isChildSection={true} metaobject={this}/>
              <div className="subsec-body">
                <div>
                  <p>
                    The printer food actually has a right and wrong direction to face when putting it on the back of your Toybox. In one direction, the printer food is much looser than the other direction. You want your printer food to be as loose as possible to make sure the Toybox has an easy time eating the printer food.
                  </p>
                  <p>
                    To make sure the printer food is as loose as possible, you want to make sure the solid side of the roll is facing outward. See the picture below.
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
                    A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool.
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
