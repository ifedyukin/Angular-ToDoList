define([
    'angular',
    './todoListTemplate.html'
], function (angular, template) {
    'use strict';

    angular.module('ToDoList').component('todoList', {
        bindings: {
            onToggle: '&',
            onRemove: '&',
            items: '<',
            filter: '<',
            search: '<'
        },
        template: template,
        controller: todoListController
    });

    function todoListController() {
        var self = this;

        self.removeItem = function (id) {
            self.onRemove({id: id});
        };

        self.toggleItem = function (id) {
            self.onToggle({id: id});
        };
    }
});
