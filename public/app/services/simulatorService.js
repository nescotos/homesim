app.factory('Simulator', function($http){

  var simFactory = {};
  simFactory.getResults = function(input, projection){
    return $http.post('/getresults/', {input : input, projection : projection});
  }

  return simFactory;
});
