import template from './bottom.html';
import controller from './bottom.controller';

const todoBottom = {
    bindings: {
        leftCount: '=',
        filter: '=',
        onSetFilter: '&',
        onCheckAll: '&',
        onRemoveCompleted: '&'
    },
    template,
    controller
};

export default todoBottom;