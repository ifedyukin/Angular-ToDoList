define([
    'angular'
], function (angular) {
    'use strict';

    angular.module("ToDoList").config(function todoConfig($routeProvider) {
        $routeProvider.
            when('/', {
                template: '<todo-app>Angular load...</todo-app>'
            }).
            when('/:filter', {
                template: '<todo-app>Angular load...</todo-app>'
            }).
            otherwise('/');
    });
});