import template from './form.html';
import controller from './form.controller';

var todoForm = {
    bindings: {
        onSubmit: '&',
        onSearch: '&'
    },
    template: template,
    controller: controller
};

export default todoForm;