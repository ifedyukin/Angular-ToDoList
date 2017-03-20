define(['./bottom.html'], function (template) {
    'use strict';

    return {
        bindings: {
            leftCount: '=',
            filter: '=',
            onSetFilter: '&',
            onCheckAll: '&',
            onRemoveCompleted: '&'
        },
        template: template,
        controller: function todoBottomController() {
            this.removeCompleted = function () {
                this.onRemoveCompleted();
            }

            this.checkAll = function () {
                this.onCheckAll();
            }

            this.setFilter = function (filter) {
                this.onSetFilter({ $filter: filter });
            }
        }
    };
});