define([
    'angular',
    './list.html'
], function (angular, template) {
    'use strict';

    angular.module("ToDoList").component('todoList', {
        bindings: {
            onToggle: '&',
            onRemove: '&',
            items: '<',
            filter: '<',
            search: '<'
        },
        template: require('./list.html'),
        controller: todoListController
    });

    function todoListController() {
        var self = this;

        self.removeItem = function (id) {
            self.onRemove({ $id: id });
        }

        self.toggleItem = function (id) {
            self.onToggle({ $id: id });
        }
    }
});