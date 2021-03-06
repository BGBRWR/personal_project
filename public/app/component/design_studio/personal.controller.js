angular.module('app')
  .controller('personalCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.individual = designFact.getCust();
    $scope.car = designFact.get();


    designSrvc.getCar($scope.car).then(function(response) {
      $scope.personalizedCar = response;
      console.log($scope.personalizedCar);
    });

    $scope.getInfo = function(){
      console.log(designFact.get());
    };

    $scope.completeOrder = function() {
      $state.go('complete');
    };
});
