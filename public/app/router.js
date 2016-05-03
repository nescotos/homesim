app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
     url: '/',
     templateUrl: 'app/pages/home.html'
    })
    .state('model', {
     url: '/model',
     templateUrl: 'app/pages/model.html'
    })
    .state('about', {
     url: '/about',
     templateUrl: 'app/pages/about.html'
    })
   .state('simulator', {
     url: '/simulator',
     templateUrl: 'app/pages/simulator.html',
     controller: 'simController',
     controllerAs: 'sim'
    })
});
