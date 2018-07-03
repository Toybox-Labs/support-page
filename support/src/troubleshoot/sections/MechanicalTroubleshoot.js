import React, { Component } from 'react';
import TroubleshootQuestionLink from '../elements/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../elements/TroubleshootQuestionTitle'

class MechanicalTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">Mechanical</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="mtq1">
        <TroubleshootQuestionTitle title="No plastic is coming out of my printer when I print!" metaobject={this} />
        <div className="sec-body">
          Well that’s not good! Sounds like something is preventing your printer food from freely flowing through the printer. This could be caused by multiple reasons, lets go over some of the most common reasons why this could happen and hopefully we can figure this out. Check out some of the reasons below.
          <div className="issue-subsec">
            <TroubleshootQuestionTitle title="Using an unsupported 3rd party filament" isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                <p>If you are using Toybox printer food, this will not be an issue, please go to the next step.</p>
                <p>When buying filament from 3rd party sources, it’s very easy to end up with inconsistent sizes and materials of filament. Sometimes they can be labeled wrong. Sometimes the thickness of the filament can variate (sometimes to thin and too thick in different parts of the roll). If the filament is too thick, it will not be able to fit through the inner tubes of the extruder and nothing will come out. Please make sure you are using 1.75mm PLA filament. After that, double check that the thickness actually is 1.75mm with a caliper, or simply test with a little bit of Toybox printer food to make sure the filament is coming out correctly. Sometimes the thickness can be correct, but cheap manufacturers will make the filament out of a different type of material and label it as PLA. </p>
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title="Printer-Food doesn’t have a clean cut" isChildSection={true} metaobject={this}/>
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
            <TroubleshootQuestionTitle title="Spool of printer food is tangled" isChildSection={true} metaobject={this}/>
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
            <TroubleshootQuestionTitle title="Printer food spool is facing the wrong direction" isChildSection={true} metaobject={this}/>
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
            <TroubleshootQuestionTitle title="Using a 3rd party spool holder, or not using one at all." isChildSection={true} metaobject={this}/>
            <div className="subsec-body">
              <p>
                A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack of printer-food and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool.
              </p>
            </div>
          </div>

          <div className="issue-subsec">
            <TroubleshootQuestionTitle title="I tried the above steps and nothing is still coming out of my printer!" isChildSection={true} metaobject={this}/>
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
          <TroubleshootQuestionLink metaobject={this} questionId="mtq1"/>
        </div>
      </div>

      <div className="issue-sec" id="mtq2">
        <TroubleshootQuestionTitle title="My printer makes a grinding noise when it starts printing" metaobject={this}/>
        <div className="sec-body">
          <p>
            Before starting the debugging process, please make sure the wire at the top is not tucked into the side of the case. Often, we tuck the wire into the side of the case to make for easier shipping, sometimes when this wire is stuck under the case, it can cause the printer from not reaching its home position correctly. Please see the image below:
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/troubleshootToyboxTopTuck.png"/>
          </p>
          <p>
            If the wire is already untucked and free this usually means that for some reason, the switches that determine the ‘home’ position aren’t being triggered. Please find the 3 switches (X,Y,Z). Look at the picture for guidance. When pressing on those switches, they should make a ‘clicky’ noise.
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_end_stoppers.JPG"/>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_sensor_metal_plate.JPG"/>
          </p>
          <ol>
            <li> Unplug your printer so it is completely off. </li>
            <li> Make sure there is no plastic stuck on the nozzle, if there is, please remove it. Be careful not to burn yourself, the nozzle can stay hot for minutes after being turned off. It’s best to use a tool like pliers and lightly remove the plastic. </li>
            <li> Move the extruder head with your to the very center.  </li>
            <li> Move the extruder to the very right side with your hand. Make sure there is a “click” noise </li>
            <li> Move your extruder to the very back of the printer. Make sure there is a “click” noise </li>
            <li> 'Place your hand under the print bed, move the bed all the way to the top, make sure there is a click noise. Heads up, if there is any hardened plastic on the bottom of the nozzle, please remove it! Or the bed won’t make it to the switch. '</li>
            <li> 'If any of those switches didn’t click. Isolate the switches that didn’t click, and then we’ll provide a quick fix. '</li>
            <li>
              "Very carefully bend the metal piece of the switch like the picture below. This will add some extra length and allow the switch to be hit by the extruder. Be careful though, if the metal  part of this switch breaks, we'll have bigger problems."
              <br />
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/Switch.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/BendingSwitch.JPG"/>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/BentSwitch.JPG"/>
            </li>
            <li> If this is on the Z axis (The print bed switch). Then you will likely need to calibrate your printer. Please see the calibration instructions on the calibration section below. </li>
          </ol>
          <TroubleshootQuestionLink metaobject={this} questionId="mtq2"/>
        </div>
      </div>

      <div className="issue-sec" id="mtq3">
        <TroubleshootQuestionTitle title="The printer nozzle scrapes into the printing surface in the beginning of the print" metaobject={this}/>
        <div className="sec-body">
          <p>
            This is happening because the Z-axis (print bed) is calibrated too closely to the printing nozzle. To fix this you will need an allen wrench (Either 3/32” imperial, or 2.5mm metric).
          </p>
          <p>
            Please locate the small screw in the back of your printing surface. See the picture below.
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/TroubleshootingScrew.jpg"/>
          </p>
          <p>
            This screw makes sure the distance is correct between the printing nozzle and the print bed when the printer starts. The trick is, to twist this screw just the right amount, so that the first layer that is printed rests perfectly on the bed. Right now, this screw is too short, so we need to loosen the screw so the screw hits the switch sooner. With your allen wrench, you want to screw in a counterclockwise direction to loosen it.
          </p>
          <p>
            You’ll then want to test a print and make sure it prints correctly. Be patient, this may take a few tries to get right! Your goal is to get the first layer to look something like the picture below:
          </p>
          <p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/><br/>
          </p>
          <TroubleshootQuestionLink metaobject={this} questionId="mtq3"/>
        </div>
      </div>
      <div className="issue-sec" id="mtq4">
        <TroubleshootQuestionTitle title="My device arrived damaged!" metaobject={this}/>
        <div className="sec-body">
          That is no good! Please contact us immediately at support@make.toys so that we can help you. Please provide a description of the problem and provide pictures and/or a video if possible.
          <TroubleshootQuestionLink metaobject={this} questionId="mtq3"/>
        </div>
      </div>
      </div>
    );
  }
}

export default MechanicalTroubleshoot;
