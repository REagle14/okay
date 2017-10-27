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
}

dashboardController.$inject = ['$scope', '$http', '$state', 'userService'];

export default dashboardController;