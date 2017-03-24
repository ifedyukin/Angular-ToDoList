define([
    'angular',
    './bottom.html'
], function (angular, template) {
    'use strict';

    angular.module("ToDoList").component('todoBottom', {
        bindings: {
            leftCount: '<',
            filtersLinks: '<',
            onSetFilter: '&',
            onCheckAll: '&',
            onRemoveCompleted: '&'
        },
        template: template,
        controller: todoBottomController
    });

    function todoBottomController() {
        var self = this;

        self.removeCompleted = function () {
            self.onRemoveCompleted();
        }

        self.checkAll = function () {
            self.onCheckAll();
        }
    }
});