define(['./list.html'], function (template) {
    'use strict';

    var listComponent = {
        bindings: {
            onToggle: '&',
            onRemove: '&',
            items: '<',
            filter: '<',
            search: '<'
        },
        template: template,
        controller: todoListController
    };

    function todoListController() {
        var self = this;

        self.removeItem = function (id) {
            self.onRemove({ $id: id });
        }

        self.toggleItem = function (id) {
            self.onToggle({ $id: id });
        }
    }

    return listComponent;
});