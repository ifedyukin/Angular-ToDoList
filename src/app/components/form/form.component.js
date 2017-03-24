define([
    'angular',
    './form.html'
], function (angular, template) {
    'use strict';

    angular.module("ToDoList").component('todoForm', {
        bindings: {
            onSubmit: '&',
            onSearch: '&'
        },
        template: template,
        controller: todoFormController
    });

    function todoFormController() {
        var self = this;

        self.submitHandle = function () {
            self.onSubmit({ $text: self.addText });
            self.addText = '';
        }

        self.searchHandle = function () {
            self.onSearch({ $text: self.searchText });
        }
    }
});