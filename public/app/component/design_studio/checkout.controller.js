angular.module('app')
  .controller('checkoutCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.orderDetails = designFact.get();
    $scope.enterKey = function(e){
      if (e.keyCode === 13) {
          console.log($scope.cust);
          designSrvc.createOrder($scope.orderDetails).then(function(response) {
            $scope.cust.order_id = response;
            designFact.passCust($scope.cust);
            designSrvc.createCustomer($scope.cust).then(function(response) {
              designFact.passCust($scope.cust);
              $state.go('yourcar');
            });
          });
        }
    };
    $scope.passInfo = function() {
      console.log($scope.cust);
      designSrvc.createOrder($scope.orderDetails).then(function(response) {
        $scope.cust.order_id = response;
        designFact.passCust($scope.cust);
        designSrvc.createCustomer($scope.cust).then(function(response) {
          designFact.passCust($scope.cust);
          $state.go('yourcar');
        });
      });
    };

  });
