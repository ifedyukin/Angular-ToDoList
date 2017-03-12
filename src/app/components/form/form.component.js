import template from './form.html';
import controller from './form.controller';

const todoForm = {
    bindings: {
        onSubmit: '&',
        onSearch: '&'
    },
    template,
    controller
};

export default todoForm;