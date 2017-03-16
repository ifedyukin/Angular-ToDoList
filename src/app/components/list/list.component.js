import template from './list.html';
import controller from './list.controller';

const todoList = {
    bindings: {
        onToggle: '&',
        onRemove: '&',
        items: '=',
        filter: '=',
        search: '='
    },
    template,
    controller
};

export default todoList;