angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push({
                code: $scope.newItem1,
                name: $scope.newItem2,
                address: $scope.newItem3,
                coordinates:{latitude: $scope.newItem4, longitude: $scope.newItem5}
            });
      $scope.newItem1 = $scope.newItem2 = $scope.newItem3 = $scope.newItem4 = $scope.newItem5 = '';
      $scope.showDetails();
    };

    $scope.deleteListing = function(listing) {
      var listingNum = $scope.listings.indexOf(listing);
      $scope.listings.splice(listingNum, 1);
      $scope.showDetails($scope.listings[listingNum]);
    };
    
    $scope.showDetails = function(listing) {
      var indexVal = $scope.listings.indexOf(listing);
      $scope.nam = Listings[indexVal].name;
      $scope.add = Listings[indexVal].address;
      $scope.lat = Listings[indexVal].coordinates.latitude;
      $scope.longit = Listings[indexVal].coordinates.longitude;
      
    };
  }
]);