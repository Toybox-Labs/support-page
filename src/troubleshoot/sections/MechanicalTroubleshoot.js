import React, { Component } from 'react';
import TroubleshootQuestionLink from '../components/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'
import { strings } from '../strings';

class MechanicalTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">{strings.MechanicalTitle}</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="mtq1">
        <TroubleshootQuestionTitle title={strings.NoPlasticTitle} metaobject={this} />
        <div className="sec-body">
          {strings.NoPlasticP1}
          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle1} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                <p>
                  {strings.NoPlasticSubtitle1P1}
                </p>
                <p>
                  {strings.NoPlasticSubtitle1P2}
                </p>
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle2} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                {strings.NoPlasticSubtitle2P1}
              </p>
              <ol>
                <li>
                  {strings.NoPlasticSubtitle2L1}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L2}
                </li>
                <li>
                 {strings.NoPlasticSubtitle2L3}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L4}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L5}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L6}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L7}
                </li>
                <li>
                  {strings.NoPlasticSubtitle2L8}
                </li>
              </ol>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle3} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                {strings.NoPlasticSubtitle3P1}
              </p>
              <p>
                {strings.NoPlasticSubtitle3P2}
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle4} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                {strings.NoPlasticSubtitle4P1}
              </p>
              <p>
                {strings.NoPlasticSubtitle4P2}
              </p>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_correct_way_to_load_printer_food_roll.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_wrong_way_to_load_printer_food_roll.JPG"/>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle5} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
               {strings.NoPlasticSubtitle5P1}
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle6} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                {strings.NoPlasticSubtitle6P1}
              </p>
              <ol>
                <li>
                  {strings.NoPlasticSubtitle6L1}
                </li>
                <li>
                  {strings.NoPlasticSubtitle6L2}
                </li>
                <li>
                  {strings.NoPlasticSubtitle6L2}
                </li>
              </ol>
            </div>
          </div>
          <TroubleshootQuestionLink metaobject={this} questionId="mtq1" section="mechanical"/>
        </div>
      </div>

      <div className="issue-sec" id="mtq2">
        <TroubleshootQuestionTitle title={strings.GrindingNoseTitle} metaobject={this}/>
        <div className="sec-body">
          <p>
            {strings.GrindingNoseP1}
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/troubleshootToyboxTopTuck.png"/>
          </p>
          <p>
            {strings.GrindingNoseP2}
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_end_stoppers.JPG"/>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_sensor_metal_plate.JPG"/>
          </p>
          <ol>
            <li> {strings.GrindingNoiseL1} </li>
            <li> {strings.GrindingNoiseL2} </li>
            <li> {strings.GrindingNoiseL3}</li>
            <li> {strings.GrindingNoiseL4}</li>
            <li> {strings.GrindingNoiseL5}</li>
            <li> {strings.GrindingNoiseL6}</li>
            <li> </li>
            <li>
              {strings.GrindingNoiseL8}
              <br />
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/Switch.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/BendingSwitch.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/BentSwitch.JPG"/>
            </li>
            <li>{strings.GrindingNoiseL9} </li>
          </ol>
          <TroubleshootQuestionLink metaobject={this} questionId="mtq2" section="mechanical"/>
        </div>
      </div>

      <div className="issue-sec" id="mtq3">
        <TroubleshootQuestionTitle title={strings.ScrapesTitle} metaobject={this}/>
        <div className="sec-body">
          <p>
            {strings.ScrapesP1}
          </p>
          <p>
            {strings.ScrapesP2}
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/TroubleshootingScrew.jpg"/>
          </p>
          <p>
            {strings.ScrapesP3}
          </p>
          <p>
            {strings.ScrapesP4}
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/><br/>
          </p>
          <TroubleshootQuestionLink metaobject={this} questionId="mtq3" section="mechanical"/>
        </div>
      </div>
      <div className="issue-sec" id="mtq4">
        <TroubleshootQuestionTitle title={strings.DamagedTitle} metaobject={this}/>
        <div className="sec-body">
          {strings.DamagedP1}
          <TroubleshootQuestionLink metaobject={this} questionId="mtq4" section="mechanical"/>
        </div>
      </div>
      </div>
    );
  }
}

export default MechanicalTroubleshoot;
