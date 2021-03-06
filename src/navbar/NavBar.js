import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types'
import DeviceHelpers from '../helpers/DeviceHelpers'
import ToyboxNavigationHelpers from '../helpers/ToyboxNavigationHelpers'

class NavBarContainer extends React.Component {
  constructor(){
    super();
    this.state = {loaded:false}
  }
  showMidNavbar(){
    return true
  }
  renderMidNavbar(){
    return (
      <span className="mid-navbar hidden-on-mobile">
        <div className="mid-navbar-wrapper">
          <div className="mid-navbar-btn-wrapper">
            <a href={ToyboxNavigationHelpers.getToysURL()} className="toys-tab hidden-on-mobile" rel="nofollow"><div id="toys-link"  >Toys</div></a>
            <div id="toys-tab-mid" className={"mid-nav-underline " }>
            </div>
          </div>
          <div className="mid-navbar-btn-wrapper">
            <a href={ToyboxNavigationHelpers.getStoreCatalogURL()} className="store-tab hidden-on-mobile "  rel="nofollow">Store</a>
            <div id="store-tab-mid" className={"mid-nav-underline " }>
            </div>
          </div>
          <div className="mid-navbar-btn-wrapper">
            <a href={ToyboxNavigationHelpers.getContactURL()} className="contact-tab hidden-on-mobile" rel="nofollow">Contact</a>
            <div id="contact-tab-mid" className={"mid-nav-underline " }>
            </div>
          </div>
        </div>
      </span>
    )
  }
  render() {

    let rootClass = this.props.transparent ?  'transparent' : 'nav-background with-border'

    const route = this.props.currentRoute
    const showStore = this.props.isDesktop && !this.showMidNavbar()
    let topLeftLabel = {label:'SUPPORT'}

    let slide = route == "toys" ? 'slide' : ''

    return (
          <div id="nav-root" className={rootClass}>
              <div className="nav-container">
                  <div className="inner">
                    {this.renderMidNavbar()}
                    <span className="top-right corner">
                      <div className="top-right-wrapper">


                        <span><a rel="nofollow" className="logo-small-right-support" href={ToyboxNavigationHelpers.getToyboxHomeURL()}></a></span>
                        
                      </div>
                    </span>
                  </div>
                <div className="top-left corner">
                  {topLeftLabel.label ?
                      (<span><a rel="nofollow" className="logo-small" href={ToyboxNavigationHelpers.getToyboxHomeURL()}></a>
                      <div className="dual-nav divider"></div>
                      <a rel="nofollow"
                          className={"dual-nav text " + slide}>{topLeftLabel.label}</a></span>)

                      :
                      (<a rel="nofollow" className="logo" href={ToyboxNavigationHelpers.getToyboxHomeURL()}></a>)
                  }
                </div>
              </div>
            </div>
    );
  }
}


export default NavBarContainer
