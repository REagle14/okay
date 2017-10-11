// import Common from './common/common';
import AppComponent from './app.component';

angular.module('app', [
	'ngMaterial',
	'ngMessages',
	'ui.router'
])
	.config(($locationProvider, $mdThemingProvider, $httpProvider) => {
		"ngInject";

		// $mdThemingProvider.theme('docs-dark', 'default')
		// 	.primaryPalette('amber')
		// 	.dark();

		// $locationProvider.html5Mode(true).hashPrefix('!');
	})

	.component('app', AppComponent)
	.run(($location, $rootScope, $state, $timeout) => {
		// enumerate routes that don't need authentication
		let routesThatDontRequireAuth = ['/login', '/register'];
		let routesAfterInitialSignup = ['/login'];

		// check if current location matches route  
		let routeIsClean = (route, routeList) => {
			let isMatch = false;
			_.forEach(routeList, function (item) {
				if (item === $location.url()) {
					isMatch = true;
				};
			});

			return isMatch;
		};

		$rootScope.$on("$locationChangeStart", (event) => {

		});
	});