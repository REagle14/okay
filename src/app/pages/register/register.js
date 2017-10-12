import registerComponent from './register.component';

let registerModule = angular.module('register', [
    'ui.router'
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('register', {
                url: '/register',
                component: 'register',
                resolve: {
                    user: ($http, $state, userService) => {
                        return userService.getUserInformation();
                    }
                }
            });
            
        $urlRouterProvider.otherwise('/login');
    })
    .component('register', registerComponent)
    .name;

export default registerModule;