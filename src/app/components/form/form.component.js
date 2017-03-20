define(['./form.html'], function (template) {
    'use strict';

    return {
        bindings: {
            onSubmit: '&',
            onSearch: '&'
        },
        template: template,
        controller: function todoFormController() {
            this.submitHandle = function () {
                this.onSubmit({ $text: this.addText });
                this.addText = '';
            }

            this.searchHandle = function () {
                this.onSearch({ $text: this.searchText });
            }
        }
    };
});