(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.reviews = [
                        {
                          text: "Angular is awesome",
                          rating: 5,
                          reviewer: "Mark"
                        }, 
                        {
                          text: "Cant't beat the Ng",
                          rating: 4,
                          reviewer: "Susan"
                        }, 
                        {
                          text: "I like React better",
                          rating: 1,
                          reviewer: "Patricia"
                        }
                      ];

    $scope.addReview = function(reviewText, reviewRating, reviewReviewer){
      var reviewHash = {
                        text: reviewText,
                        rating: reviewRating,
                        reviewer: reviewReviewer
                        };
      $scope.reviews.push(reviewHash);
      $scope.newReviewText = null;
      $scope.newReviewRating = null;
      $scope.newReviewReviewer = null;
    };

    $scope.isPositive = function(review) {
      return review.indexOf("stupid") === -1;
      true
    };

    window.scope = $scope;
  });
}());