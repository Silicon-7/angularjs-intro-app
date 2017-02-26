(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.reviews = [
                      "Angular is awesome", 
                      "Cant't beat the Ng", 
                      "I like React better"
                      ];

    $scope.addReview = function(review){
      $scope.reviews.push(review);
    };

    window.scope = $scope;
  });
}());