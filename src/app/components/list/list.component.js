import template from './list.html';
import controller from './list.controller';

var todoList = {
    bindings: {
        onToggle: '&',
        onRemove: '&',
        items: '=',
        filter: '=',
        search: '='
    },
    template: template,
    controller: controller
};

export default todoList;