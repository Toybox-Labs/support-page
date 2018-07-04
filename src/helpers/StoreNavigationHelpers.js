/* global StoreNavigationHelpers:true */
StoreNavigationHelpers = {}

StoreNavigationHelpers.getStoreCatalogURL = function(){
  return 'https://shop.make.toys/store/catalog#all'
}

StoreNavigationHelpers.getStoreCheckoutURL= function(){
  return 'https://shop.make.toys/store/options'
}

StoreNavigationHelpers.goToStoreCatalog = function(){
  window.location = StoreNavigationHelpers.getStoreCatalogURL()
}

StoreNavigationHelpers.goToStoreCheckout = function(){
  window.location = StoreNavigationHelpers.getStoreCheckoutURL()
}

export default StoreNavigationHelpers