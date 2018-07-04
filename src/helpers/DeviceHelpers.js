
let DeviceHelpers = {}

DeviceHelpers.isDesktop = function(){
  return window.innerWidth() > 767;//$(document).width() > 767
}

DeviceHelpers.isIPadOrMobile = function(){
  return window.innerWidth() < 991;//$(document).width() > 767
}


export default DeviceHelpers
