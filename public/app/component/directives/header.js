angular.module('app')
  .directive('broadHeader', function() {

return {
  restrict: 'E',
  templateUrl: 'app/component/directives/templates/header.html',
  controller: function($scope, $state, $rootScope){
    $scope.containerClass = $rootScope.containerClass;
  },
  link: function(scope, element, attrs){
    scope.show = false;
    scope.showEngine = function() {
      if(scope.show === false) {
        scope.show = true;
      }
      else {
        scope.show = false;
      }
    };
    }
  };
  });


  var event = new Event('lastJsLoaded');
  document.dispatchEvent(event);
