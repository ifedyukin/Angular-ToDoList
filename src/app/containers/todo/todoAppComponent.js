define([
    'angular',
    './todoAppTemplate.html'
], function (angular, template) {
    'use strict';

    angular.module("ToDoList").component('todoApp', {
        template: template,
        controller: todoAppController
    });

    function todoAppController(todoStorage, $routeParams) {
        var self = this;

        self.$onInit = function initComponent() {
            self.items = todoStorage.getItems();

            self.setFilter($routeParams.filter);
            self.search = '';

            self.leftTodoCount = getLeftItemsCount();
        }

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

        self.setFilter = setFilter;
        self.searchItem = searchItem;

        self.addItem = addItem;
        self.toggleItem = toggleItem;
        self.removeItem = removeItem;
        self.removeCompleted = removeCompleted;
        self.checkAll = checkAll;

        function addItem(text) {
            self.items = todoStorage.addItem(text);
            self.leftTodoCount++;
        }

        function toggleItem(id) {
            self.items = todoStorage.toggleItem(id);
            self.leftTodoCount = getLeftItemsCount();
        }

        function removeItem(id) {
            self.items = todoStorage.removeItem(id);
            self.leftTodoCount = getLeftItemsCount();
        }

        function removeCompleted() {
            self.items = todoStorage.removeCompleted();
            self.leftTodoCount = getLeftItemsCount();
        }

        function checkAll() {
            self.items = todoStorage.checkAll();
            self.leftTodoCount = 0;
        }

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

        function getLeftItemsCount() {
            return self.items.filter(function (item) {
                return !item.checked
            }).length;
        }
    }
});