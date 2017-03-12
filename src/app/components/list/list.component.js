import template from './list.html';
import controller from './list.controller';

const todoList = {
    bindings: {
        onCheck: '&',
        onRemove: '&',
        items: '=',
        filter: '=',
        search: '='
    },
    template,
    controller
};

export default todoList;