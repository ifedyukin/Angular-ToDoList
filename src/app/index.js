require('angular');
require('angular-route');

require('../assets/css/bootstrap.min.css');
require('../assets/css/styles.css');

angular.module("ToDoList", ['ngRoute']);

require('./services/todoStorage.service');
require('./components/bottom/bottom.component');
require('./components/form/form.component');
require('./components/list/list.component');
require('./containers/todo/todo.component');
require('./containers/todo/todo.config');