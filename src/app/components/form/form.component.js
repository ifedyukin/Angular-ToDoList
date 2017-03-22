define(['./form.html'], function (template) {
    'use strict';

    var formComponent = {
        bindings: {
            onSubmit: '&',
            onSearch: '&'
        },
        template: template,
        controller: todoFormController
    };

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

    return formComponent;
});