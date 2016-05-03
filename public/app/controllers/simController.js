app.controller('simController', function(Simulator, $scope){
  var vm = this;
  vm.triggered = false;
  vm.data = [];

  vm.getResults = function(){
    Simulator.getResults(vm.input, vm.projection).then(function(data){
      vm.data = [];
      for(var i = 0; i < data.data.length; i++){
        vm.data.push(data.data[i].value);
      }
      console.log(vm.data);
      vm.triggered = true;
      $scope.chart = c3.generate({
        bindto: '#chart',
        data: {
          json: {
            Precios : vm.data
          }
        }
      });
    });
  }


});
