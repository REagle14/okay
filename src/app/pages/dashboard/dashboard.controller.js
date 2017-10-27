const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class dashboardController {
	constructor($scope, $http, $state, userService) {
        this.name = 'dashboard';
        this.$scope = $scope;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        this.model = userService.user;

        this.init();
	}

    init () {
        this.$scope.$on('$viewContentLoaded', () => { 
            this.model = this.userService.user;
        });
	}
	
	logout () {
		this.$http({
            method: 'get',
            url: '/rest/logout',
            data: this.model,
        }).then(function successCallback(response) {
            this.$state.go('login');
        }.bind(this), function errorCallback(response) {
            console.log('error');
        });
	}
}

dashboardController.$inject = ['$scope', '$http', '$state', 'userService'];

export default dashboardController;