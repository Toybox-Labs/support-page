import React, { Component } from 'react';
import TroubleshootQuestionLink from '../components/TroubleshootQuestionLink'
import TroubleshootQuestionTitle from '../components/TroubleshootQuestionTitle'

class SetupTroubleshoot extends Component {
  render() {
    return (
      <div>
        <div className="title">Setup</div>
        <div className="title-sep"></div>
        <div className="issue-sec" id="sq1">
          <TroubleshootQuestionTitle title="Help! I can't connect to the TOYBOX network" metaobject={this}/>
          <div className="sec-body">
            <p>
              Shortly after connecting to the ‘TOYBOX’ network, a captive portal popup window should appear on your device. Here, you should be able to pick a home wifi network to connect to. If this  does not happen, please follow the following steps.
            </p>
            <ol>
              <li>
                On your device, connect to the Toybox network. Please wait for the connection to the network to fully establish and then wait on the current screen for the popup to appear. On iphone and android devices, if you navigate away from the wifi page, sometimes it will cause the popup to never appear. This process can sometimes take up to two minutes.
              </li>
              <li>
                If you seem to be successfully connected to the network, and no popup ever appears. Please navigate in your browser and type this in your url box: “toy.box” without quotation marks.
              </li>
              <li>
                If no popup appears. Please restart your Toybox by unplugging, and plugging in the Toybox.
              </li>
              <li>
                You should see a green screen load with directions to connect to your home wifi network.
              </li>
              <li>
                Wait up to 2 minutes if this does not work try again on another device.
              </li>
              <li>
                One thing that often helps is to “forget network” on the device you are using to connect to the Toybox, please look up instructions on how to forget networks on your current device.
              </li>
              <li>
                After forgetting the network, try reconnecting to the Toybox.
              </li>
              <li>
                If you are still having problems connecting to the Toybox network, please contact us at “support@make.toys” so we can personally help guide and debug you through the process.
              </li>
            </ol>
            <TroubleshootQuestionLink metaobject={this} questionId="sq1"/>
          </div>
        </div>

        <div className="issue-sec" id="sq2">
          <TroubleshootQuestionTitle title="I can connect to the TOYBOX network, but I can’t find my home network." metaobject={this}/>
          <div className="sec-body">
            <p>
              There are multiple things that can cause this, so we’ll walk you through a process to hopefully correct this problem.
            </p>
            <p>
              Please ensure that you have the following specifications. Toybox will only work with routers under these specifications:
            </p>
            <ol>
              <li> Printer is within 20 feet with a direct line of sight to the router </li>
              <li> Network to connect to is on the 2.4Ghz wifi band </li>
              <li> Wifi router does not have a static IP address (By default, your router probably will not have this setting) </li>
              <li> If you are still having trouble finding your network. You can alternatively turn your phone as a hotspot and use that </li>
            </ol>
            <TroubleshootQuestionLink metaobject={this} questionId="sq2"/>
          </div>
        </div>

        <div className="issue-sec" id="sq3">
          <TroubleshootQuestionTitle title="My printer is not showing the code to link my profile" metaobject={this}/>
          <div className="sec-body">
            <p>
              If the Toybox website or app is asking for a 6 digit code to link your profile. Please check the screen on your LCD. If there is no 6 digit code displayed on the screen, you can retrieve the code by doing the following steps:
            </p>
            <ol>
              <li>On the LCD screen, click the gear in the top right</li>
              <li>Click on the account button, there should now be a code that displays on the screen.</li>
            </ol>
            <p> If the printer stays in loading when you try to get the code, it means that the printer is having a difficult time reaching the server. This is most likely due to a poor internet connection. Please make sure you have a constant and reliable internet connection</p>
            <TroubleshootQuestionLink metaobject={this} questionId="sq3"/>
          </div>
        </div>

        <div className="issue-sec" id="sq4">
            <TroubleshootQuestionTitle title="My printer screen stays in loading" metaobject={this}/>
          <div className="sec-body">
            <p>If the printer LCD screen stays in loading for a long time, it is likely that your printer is not connected to the internet. Please make sure to keep your printer no more than 20 feet away from the router.</p>
            <p>If you are on a reliable connection, and the screen is stuck at loading for more than 4 minutes, please send send us an email through <a className="blue-link contact-link-problems">here</a>.</p>
            <TroubleshootQuestionLink metaobject={this} questionId="sq4"/>
          </div>
        </div>
        <div className="issue-sec" id="sq5">
          <TroubleshootQuestionTitle title="I can't find the mobile app" metaobject={this}/>
          <div className="sec-body">
            <p>You can find the iOS app <a className="blue-link" href="https://itunes.apple.com/us/app/toybox-3d-print-your-own-toys!/id1166269606?ls=1&mt=8" target="_blank">here</a> and the Android app <a className="blue-link" href="https://play.google.com/store/apps/details?id=com.toybox" target="_blank">here</a>.</p>
            <p> If you want to search in the app store or google play store. Try searching “Toybox 3D Printer.” It should be the first one to come up, it’s orange and has the Toybot, robot as the image. </p>
            <TroubleshootQuestionLink metaobject={this} questionId="sq5"/>
          </div>
        </div>
        <div className="issue-sec" id="sq6">
          <TroubleshootQuestionTitle title="I can't find the desktop app" metaobject={this}/>
          <div className="sec-body">
            <p>Welcome to the future! You can control your Toybox printer through the website. You can choose a toy from the <a className="blue-link" href="/toys" target="_blank">catalog</a> or go to the <a className="blue-link" href="/custom-toys" target="_blank">creator space</a> to create your own! Just make sure that you are logged into an account that is connected to your printer</p>
            <TroubleshootQuestionLink metaobject={this} questionId="sq6"/>
          </div>
        </div>
        <div className="issue-sec" id="sq7">
          <TroubleshootQuestionTitle title="I can't find the drivers for the printer" metaobject={this}/>
          <div className="sec-body">
            <p>Since you can control your printer remotely through our app or website, there is no need for drivers :)</p>
            <TroubleshootQuestionLink metaobject={this} questionId="sq7"/>
          </div>
        </div>
      </div>
    );
  }
}

export default SetupTroubleshoot;
