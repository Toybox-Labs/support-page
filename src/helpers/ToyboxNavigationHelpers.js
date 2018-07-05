
let ToyboxNavigationHelpers = {}

ToyboxNavigationHelpers.getToyboxHomeURL = function(){
  return 'https://www.make.toys/'
}

ToyboxNavigationHelpers.getStoreCatalogURL = function(){
  return 'https://shop.make.toys/store/catalog#all'
}

ToyboxNavigationHelpers.getStoreCheckoutURL= function(){
  return 'https://shop.make.toys/store/options'
}

ToyboxNavigationHelpers.getContactURL= function(){
  return 'https://www.make.toys/contact'
}

ToyboxNavigationHelpers.getToysURL= function(){
  return 'https://www.make.toys/toys'
}

ToyboxNavigationHelpers.getGithubRepoURL = function(){
  return 'https://github.com/Toybox-Labs/support-page'
}

ToyboxNavigationHelpers.getGithubNewIssueURL = function(){
  return 'https://github.com/Toybox-Labs/support-page/issues/new'
}

ToyboxNavigationHelpers.getToyboxProfileURL = function(){
  return 'https://www.make.toys/profile'
}

ToyboxNavigationHelpers.goToToyboxHome = function(){
  window.location = ToyboxNavigationHelpers.getToyboxHomeURL()
}

ToyboxNavigationHelpers.goToStoreCatalog = function(){
  window.location = ToyboxNavigationHelpers.getStoreCatalogURL()
}

ToyboxNavigationHelpers.goToStoreCheckout = function(){
  window.location = ToyboxNavigationHelpers.getStoreCheckoutURL()
}

ToyboxNavigationHelpers.goToToys = function(){
  window.location = ToyboxNavigationHelpers.getToysURL()
}

ToyboxNavigationHelpers.goToContact = function(){
  window.location = ToyboxNavigationHelpers.getContactURL()
}


export default ToyboxNavigationHelpers
