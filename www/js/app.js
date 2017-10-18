// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="app.gioca"){
      alert("button back");
    }
  }, 100);

  
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.backButton.text(null);
	$ionicConfigProvider.backButton.previousTitleText(false);
	$ionicConfigProvider.views.maxCache(0);
  
  
  
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.regole', {
    url: '/regole',
    views: {
      'menuContent': {
        templateUrl: 'templates/regole.html',
        controller: 'RegoleCtrl'
      }
    }
  })

  .state('app.gioca', {
      url: '/gioca',
      views: {
        'menuContent': {
          templateUrl: 'templates/gioca.html',
          controller: 'PlayCtrl'
        }
      }
    })

  .state('app.underconstruction', {
    url: '/underconstruction',
    views: {
      'menuContent': {
        templateUrl: 'templates/underconstruction.html',
      }
    }
  })

  .state('app.play', {
    url: '/standard',
    views: {
      'menuContent': {
        templateUrl: 'templates/play.html',
        controller: 'MatchCtrl'
      }
    }
  })

  .state('app.variantiregole', {
    url: '/regole/:varianteId',
    views: {
      'menuContent': {
        templateUrl: 'templates/variantiregole.html',
        controller: 'VariantiListCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gioca');
});
