define(['./todo.html'], function (template) {
    'use strict';

    var todoApp = {
        template: template,
        controller: todoAppController
    };

    function todoAppController(todoStorage, $scope, $routeParams) {
        var self = this;
        this.service = todoStorage;
        this.search = '';
        this.setFilter($routeParams.filter);

        $scope.$watch(function () {
            return self.service.items
        },
            function (newData) {
                self.leftCount = newData.filter(function (item) {
                    return !item.checked
                }).length
            }
            , true);
    }

    todoAppController.prototype.searchItem = function searchItem(text) {
        this.search = text;
    }

    todoAppController.prototype.setFilter = function setFilter(filter) {
        switch (filter) {
            case 'active':
                this.filter = false;
                break;
            case 'completed':
                this.filter = true;
                break;
            default:
                this.filter = '';
                break;
        }
    }

    return todoApp;
});