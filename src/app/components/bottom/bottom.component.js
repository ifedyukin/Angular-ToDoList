define(['./bottom.html'], function (template) {
    'use strict';

    var bottomComponent = {
        bindings: {
            leftCount: '<',
            filtersLinks: '<',
            onSetFilter: '&',
            onCheckAll: '&',
            onRemoveCompleted: '&'
        },
        template: template,
        controller: todoBottomController
    };

    function todoBottomController() {
        var self = this;

        self.removeCompleted = function () {
            self.onRemoveCompleted();
        }

        self.checkAll = function () {
            self.onCheckAll();
        }
    }

    return bottomComponent;
});