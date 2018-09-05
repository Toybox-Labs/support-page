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
                <p>If you are using Toybox printer food, this will not be an issue, please go to the next step.</p>
                <p>When buying filament from 3rd party sources, it’s very easy to end up with inconsistent sizes and materials of filament. Sometimes they can be labeled wrong. Sometimes the thickness of the filament can variate (sometimes to thin and too thick in different parts of the roll). If the filament is too thick, it will not be able to fit through the inner tubes of the extruder and nothing will come out. Please make sure you are using 1.75mm PLA filament. After that, double check that the thickness actually is 1.75mm with a caliper, or simply test with a little bit of Toybox printer food to make sure the filament is coming out correctly. Sometimes the thickness can be correct, but cheap manufacturers will make the filament out of a different type of material and label it as PLA. </p>
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle2} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                Sometimes, when pulling printer-food out of the printer, the filament can form a little blob at the end. This can prevent the printer food from flowing freely through the extruder. To see if this is the problem do the following:
              </p>

              <ol>
                <li> Pull the printer food out of the printer by clicking the gear icon on the printer’s LCD and then pressing the ‘ink’ button </li>
                <li> Once the nozzle is heated to a high enough temperature to remove, the buttons on the LCD will turn white, this usually takes about 2 minutes </li>
                <li> Keep pressing the “remove” button until you can freely pull the printer-food out of the top of the printer </li>
                <li> Get a pair of scissors and cut off about an inch of printer-food from the spool </li>
                <li> Take the printer food, and put it back into the extruder until it feels a little tight </li>
                <li> Keep pressing the ‘“insert” button until filament comes out of the nozzle </li>
                <li> Try to print something simple again like the toybox keychain </li>
                <li> If the problem still persists, try  the next step </li>
              </ol>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle3} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                Every once in a while there can be be a knot in the printer-food roll. This can prevent the printer-food roll from unrolling and properly feeding into the printer. Check the roll and make sure there isn’t a knot and you can freely roll and unroll the printer food roll by pulling lightly on the printer food sticking out of the roll.
              </p>
              <p>
                If there is a knot, remove your printer food from the printer and undo the knot. The printer should then be ready to go!
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle4} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                The printer food actually has a right and wrong direction to face when putting it on the back of your Toybox. In one direction, the printer food is much looser than the other direction. You want your printer food to be as loose as possible to make sure the Toybox has an easy time eating the printer food.
              </p>
              <p>
                To make sure the printer food is as loose as possible, you want to make sure the solid side of the roll is facing outward. See the picture below.
              </p>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_correct_way_to_load_printer_food_roll.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_wrong_way_to_load_printer_food_roll.JPG"/>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle5} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack of printer-food and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool.
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title={strings.NoPlasticSubtitle6} isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                Hmm, seems like you might either have a hardware issue or an uncommon issue. Please contact us at support@make.toys with the following information so we can personally help you figure this out. If possible, please try to send a video of the printer printing, it helps tremendously and we can usually figure out what is wrong right away with a good video.
              </p>
              <ol>
                <li>When printing, if you lightly hold the printer food feeding into the extruder, can you feel it clicking?</li>
                <li>Is the extruder fan on? (You should hear it, it’s pretty loud)</li>
                <li>Was this printer working before? Has anything changed since the last time it worked?</li>
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
