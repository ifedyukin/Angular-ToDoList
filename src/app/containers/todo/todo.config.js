var todoConfig = function todoConfig($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            template: '<todo-app>Angular load...</todo-app>'
        }).
        when('/:filter', {
            template: '<todo-app>Angular load...</todo-app>'
        }).
        otherwise('/');
}

export default todoConfig;