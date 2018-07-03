import React, { Component } from 'react';
import TroubleshootQuestionLink from '../elements/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../elements/TroubleshootQuestionTitle'

class PrinterQualityTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">Print Quality</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="pqq1">
          <TroubleshootQuestionTitle title="My prints seem to be missing layers or have really thin plastic layers in the middle of the prints" metaobject={this}/>
          <div className="sec-body">
            <p>
              This usually is caused by low quality filament. If you are using third party filaments, please try a roll of Toybox printer food to see if this fixes the problem.
            </p>
            <p>
              Another thing that can potentially cause this is that the extruder motor is having a tough time unwinding the printer-food roll. Please make sure the solid side of the printer-food roll is facing outwards. The printer-food roll should be extremely easy to unwind, it should feed pretty loose on the spool holder, even a little resistance can dramatically affect to quality of the prints. See the picture below.
            </p>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_correct_way_to_load_printer_food_roll.JPG"/>
            <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/toybox_wrong_way_to_load_printer_food_roll.JPG"/>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq1"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq2">
          <TroubleshootQuestionTitle title="My prints come out looking warped" metaobject={this}/>
          <div className="sec-body">
            <p>
              For some prints, especially smaller prints, sometimes the object doesn’t have enough time to cool and this causes warping. This also happens when pulling the print off the bed too quickly after its done printing. It’s good to wait about 30 seconds to a minute after the print is complete before taking the print from the bed.
            </p>
            <p>
              To prevent warpage, try pointing a fan on your printer while it prints, that should help.
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq2"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq3">
          <TroubleshootQuestionTitle title="My prints don’t stick to the surface" metaobject={this}/>
          <div className="sec-body">
            <p>
              It seems like this could because the printing surface is too low for the nozzle. Sometimes if this is the case, the plastic never gets a chance to fully stick to the surface and ends up gooping up under the nozzle.
            </p>
            <div>
              There are two fairly quick fixes for this:<br/>
              <ol>
                <li>
                    'There is a little screw in the back of the printing surface on the left side. If you can find an allen wrench that fits (Either 3/32" imperial or 2.5mm metric), you can tighten that screw around 1/4 of a full turn, that should cause the printer to start the print a bit closer to the printing surface.'
                    <br/>
                    <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/TroubleshootingScrew.jpg"/>
                </li>
                <li>Another quick fix is to add a three or four layers of masking tape the print surface. That will add some extra height to the surface and help with the plastic sticking to the print bed</li>
              </ol>
              <p>You will eventually want to aim for a good first layer. Something like in the picture below is acceptable</p>
              <p>
                <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/>
              </p>
            </div>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq3"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq4">
          <TroubleshootQuestionTitle title="My prints don’t look like anything at all, just a blobby or stringy mess" metaobject={this}/>
          <div className="sec-body">
            <p>
              First, make sure your removable flexible magnetic bed is in the printer. If this is not inside the printer, the printing nozzle will be too far from the build plate to actually print.
            </p>
            <p>
              If your removable magnetic bed is already on the metal platform, Similar to above, your printer’s z-axis (print bed) is probably calibrated too low.
            </p>
            <p>
              'There is a little screw in the back of the printing surface on the left side. If you can find an allen wrench that fits (Either 3/32" imperial or 2.5mm metric), you can tighten that screw around 1/2 of a full turn at a time, that should cause the printer to start the print a bit closer to the printing surface.'
            </p>
            <p>
              After doing that, go ahead and start a print. This may take a few tried to get right, so be patient, once you get this perfect, you should not have to recalibrate it again.
            </p>
            <p>
              You want to make sure the first layer looks really nice. After that, your print should start working. Below is a picture of an acceptable first layer.
            </p>
            <p>
              <img className="portrait" src="https://s3-us-west-2.amazonaws.com/toybox-website-static-assets/ToyboxFirstLayer.jpg"/>
            </p>
            <TroubleshootQuestionLink metaobject={this} questionId="pqq4"/>
          </div>
        </div>

        <div className="issue-sec" id="pqq5">
          <TroubleshootQuestionTitle title="My prints look like they have some weird shifting going on" metaobject={this}/>
          <div className="sec-body">
            <p>
              This is most likely because something is preventing the motors on the XY plane to correctly move. Usually this means there is some type of resistance on the extruder, most often caused by it not being able to pull the filament roll. Please check the following:
            </p>
            <div className="issue-subsec">
              <TroubleshootQuestionTitle title="Spool of printer food is tangled" isChildSection={true} metaobject={this}/>
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
              <TroubleshootQuestionTitle title="Printer food spool is facing the wrong direction" isChildSection={true} metaobject={this}/>
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
              <TroubleshootQuestionTitle title="Using a 3rd party spool holder, or not using one at all." isChildSection={true} metaobject={this}/>
              <div className="subsec-body">
                <div>
                  <p>
                    A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool.
                  </p>
                </div>
              </div>
            </div>

            <TroubleshootQuestionLink metaobject={this} questionId="pqq5"/>

          </div>
        </div>
      </div>
    );
  }
}

export default PrinterQualityTroubleshoot;
