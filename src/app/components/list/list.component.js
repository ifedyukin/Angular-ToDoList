define(['./list.html'], function (template) {
    'use strict';

    return {
        bindings: {
            onToggle: '&',
            onRemove: '&',
            items: '=',
            filter: '=',
            search: '='
        },
        template: template,
        controller: function todoListController() {
            this.removeItem = function (id) {
                this.onRemove({ $id: id });
            }

            this.toggleItem = function (id) {
                this.onToggle({ $id: id });
            }
        }
    };
});