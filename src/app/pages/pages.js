import Dashboard from './dashboard/dashboard';
import Register from './register/register';
import Login from './login/login';

let pagesModule = angular.module('app.pages', [
	Register,
	Dashboard,
    Login
])
    .name;

export default pagesModule;
