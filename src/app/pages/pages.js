import Register from './register/register';
import Login from './login/login';

let pagesModule = angular.module('app.pages', [
    Register,
    Login
])
    .name;

export default pagesModule;
