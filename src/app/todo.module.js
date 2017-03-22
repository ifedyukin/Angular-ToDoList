require('angular');
require('angular-route');

require('../assets/css/bootstrap.min.css');
require('../assets/css/styles.css');

define([
    './containers/todo/todo.component.js',
    './containers/todo/todo.config',
    './services/todoStorage.service',
    './components/bottom/bottom.component.js',
    './components/form/form.component.js',
    './components/list/list.component.js'
], function (todoApp,
    todoConfig,
    todoStorage,
    todoBottom,
    todoForm,
    todoList) {
        'use strict';

        return angular
            .module("ToDoList", ['ngRoute'])
            .config(todoConfig)
            .service('todoStorage', todoStorage)
            .component('todoApp', todoApp)
            .component('todoBottom', todoBottom)
            .component('todoForm', todoForm)
            .component('todoList', todoList);
    });