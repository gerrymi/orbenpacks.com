var products = [ 
  { 
    collection: 'Modular',
    styleName: 'Scout', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  }, 
  { 
    collection: 'Modular',
    styleName: 'Explorer', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  }, 
  { 
    collection: 'Modular',
    styleName: 'Trooper', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  },
  { 
    collection: 'PDQ',
    styleName: 'Moore', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  },
  { 
    collection: 'PDQ',
    styleName: 'Explorer', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  },
  { 
    collection: 'PDQ',
    styleName: 'Trooper', 
    msrp: 'n/a', 
    flavorText: 'Flavor text makes products more interesting' ,
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa vitae sem vestibulum pharetra. Aenean tempus purus eu nisl dictum vestibulum. Vivamus ornare interdum libero eget consectetur. Pellentesque dictum sapien eget dui vulputate, nec finibus orci vehicula.',
    features: ['Laptop Sleeve','Organizer Pocket', 'Sternum Strap', 'Other Cool Stuff', '...and More'],
  },
  

];


app.controller('MainController',['$scope', function($scope) {
	$scope.title = 'Orben';
	$scope.promo = 'Browse The Collection';
	$scope.products = products;
}]);