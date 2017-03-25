define([
    'angular',
    './todo.html'
], function (angular, template) {
    'use strict';

    angular.module("ToDoList").component('todoApp', {
        template: template,
        controller: todoAppController
    });

    function todoAppController(todoStorage, $routeParams) {
        var self = this;

        self.filtersLinks = [
            { link: '#/', value: 'All' },
            { link: '#/active', value: 'Active' },
            { link: '#/completed', value: 'Completed' }
        ];

        var filterValues = {
            "active": false,
            "completed": true,
            "all": ''
        };

        self.todoStorage = todoStorage;

        self.setFilter = setFilter;
        self.searchItem = searchItem;

        self.setFilter($routeParams.filter);
        self.search = '';

        function searchItem(text) {
            self.search = text;
        }

        function setFilter(filter) {
            if (!filter) {
                filter = 'all';
            }

            self.filter = filterValues[filter];

            function updateActiveFilter() {
                self.filtersLinks = self.filtersLinks.map(function (link) {
                    return link.value.toLowerCase() === filter ?
                        { link: link.link, value: link.value, active: true } :
                        { link: link.link, value: link.value, active: false };
                });
            }
            updateActiveFilter();
        }
    }
});