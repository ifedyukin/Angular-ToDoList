import template from './bottom.html';
import controller from './bottom.controller';

var todoBottom = {
    bindings: {
        leftCount: '=',
        filter: '=',
        onSetFilter: '&',
        onCheckAll: '&',
        onRemoveCompleted: '&'
    },
    template: template,
    controller: controller
};

export default todoBottom;