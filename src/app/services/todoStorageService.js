define([
    'angular',
    'shortid'
], function (angular, shortid) {
    'use strict';

    angular.module('ToDoList').service('todoStorage', function todoStorage() {
        var self = this;

        function getLocalItems() {
            var items = JSON.parse(localStorage.getItem('Items'));
            return items ? items : [];
        }

        function setLocalItems(items) {
            localStorage.setItem('Items', JSON.stringify(items));
        }

        self.addItem = addItem;
        self.removeItem = removeItem;
        self.toggleItem = toggleItem;

        self.removeCompleted = removeCompleted;
        self.checkAll = checkAll;

        self.getItems = getItems;
        self.setItems = setItems;

        self.getItems();

        function getItems() {
            self.items = getLocalItems();
            return self.items;
        }

        function setItems(items) {
            setLocalItems(items);
            return self.items;
        }

        function addItem(text) {
            function Item(text) {
                return {
                    id: shortid.generate(),
                    text: text,
                    checked: false
                };
            }

            if (text) {
                self.items = self.items.concat(new Item(text));
                setItems(self.items);
            }

            return self.items;
        }

        function removeItem(id) {
            self.items = self.items.filter(function (item) {
                return item.id !== id;
            });

            setItems(self.items);
            return self.items;
        }

        function toggleItem(id) {
            self.items = self.items.map(function (item) {
                if (item.id === id) {
                    self.leftTodoCount = item.checked ? ++self.leftTodoCount : --self.leftTodoCount;
                    return {id: item.id, text: item.text, checked: !item.checked}
                } else {
                    return item;
                }
            });

            setItems(self.items);
            return self.items;
        }

        function removeCompleted() {
            self.items = self.items.filter(function (item) {
                return !item.checked;
            });

            setItems(self.items);
            return self.items;
        }

        function checkAll() {
            self.items = self.items.map(function (item) {
                return item = {id: item.id, text: item.text, checked: true};
            });

            setItems(self.items);
            return self.items;
        }
    });
});