angular.module('app')
  .controller('designCtrl', function($scope, designSrvc, designFact) {

    //Exterior images
    $scope.base = {img: './assets/img/design-shop/base.jpg'};
    $scope.cover = {img: './assets/img/design-shop/paint/solidwhite.png'};
    $scope.roof = {};
    $scope.tires = {img: './assets/img/design-shop/exterior/slipstream19.png'};

    //Interior images
    $scope.iBase = {img: './assets/img/design-shop/interior/base.jpg'};
    $scope.baseInt = {img: './assets/img/design-shop/interior/base2.png'};
    $scope.liner = {img: './assets/img/design-shop/interior/white-headliner.png'};
    $scope.decor = {img: './assets/img/design-shop/interior/dark-ash-decor.png'};

    $scope.monetize = function() {
      $scope.total = $scope.total.toString().split('');
      $scope.total.splice($scope.total.length - 3, 0, ',');
      $scope.total = $scope.total.join('');
    };

    $scope.total = 62000;
    $scope.monetize();

    $scope.customCar = {
      carType: {battery: '60D', price: 71000},
      carColor: {paint: 'Solid White', price: 0},
      carWheels: {rims: '19" Silver Slipstream Wheels',price: 0},
      carRoof: {roof: 'Body', price: 0},
      headliner: {liner: 'White Alcantara Headliner', price: 0},
      decor: {decor: 'Dark Ash Wood Decor', price: 0},
      seats: {seat: 'Multi-Pattern Black Seats', price: 0},
      options: {model_id: 1, rim_id: 1, color_id: 2, liner_id: 2, decor_id: 3, seat_id: 1, roof_id: 1}
    };

    $scope.passOrder = function() {
      designFact.pass($scope.customCar.options);
    };

    $scope.calculateCost = function() {
      $scope.total = $scope.customCar.carType.price + $scope.customCar.carColor.price + $scope.customCar.carWheels.price + $scope.customCar.carRoof.price + $scope.customCar.headliner.price + $scope.customCar.seats.price + $scope.customCar.decor.price - 7500 - 1500;
      $scope.monetize();
    };
    $scope.battery = function(battery){
      designSrvc.updateBat(battery).then(function(response) {
        $scope.customCar.carType.battery = response.data[0].battery;
        $scope.customCar.carType.price = response.data[0].battery_price;
        $scope.customCar.options.model_id = battery;
        $scope.calculateCost();
      });
    };
    $scope.paint = function(color) {
      designSrvc.updateBody(color).then(function(response) {
        $scope.cover.img = response[0].color_url;
        $scope.customCar.carColor.paint = response[0].color;
        $scope.customCar.carColor.price = response[0].color_price;
        $scope.customCar.options.color_id = color;
        $scope.calculateCost();
      });
    };

    $scope.changeWheel = function(type) {
      designSrvc.changeWheel(type).then(function(response) {
        $scope.tires.img = response[0].rim_url;
        $scope.customCar.carWheels.rims = response[0].style;
        $scope.customCar.carWheels.price = response[0].rim_price;
        $scope.customCar.options.rim_id = type;
        $scope.calculateCost();
      });
    };

    $scope.changeRoof = function(roof) {
      designSrvc.changeRoof(roof).then(function(response) {
        $scope.roof.img = response[0].roof_url;
        $scope.customCar.carRoof.roof = response[0].roof;
        $scope.customCar.carRoof.price = response[0].roof_price;
        $scope.customCar.options.roof_id = roof;
        $scope.calculateCost();
    });
  };

    $scope.changeHeadliner = function(liner) {
      designSrvc.changeLiner(liner).then(function(response) {
        $scope.liner.img = response[0].liner_url;
        $scope.customCar.headliner.liner = response[0].liner;
        $scope.customCar.headliner.price = response[0].liner_price;
        $scope.customCar.options.liner_id = liner;
        $scope.calculateCost();
      });
    };

    $scope.changeDecor = function(decor) {
      designSrvc.changeDecor(decor).then(function(response) {
        $scope.decor.img = response[0].decor_url;
        $scope.customCar.decor.decor = response[0].decor;
        $scope.customCar.decor.price = response[0].decor_price;
        $scope.customCar.options.decor_id = decor;
        $scope.calculateCost();
      });
    };

    $scope.changeSeats= function(seats) {
      designSrvc.changeSeats(seats).then(function(response) {
        $scope.iBase.img = response[0].seat_url;
        $scope.baseInt.img = response[0].seat_mid_url;
        $scope.customCar.seats.seats = response[0].seats;
        $scope.customCar.seats.price = response[0].seat_price;
        $scope.customCar.options.seat_id = seats;
        $scope.calculateCost();
      });
    };

});
