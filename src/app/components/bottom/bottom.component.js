import controller from './bottom.controller';

var todoBottom = {
    bindings: {
        leftCount: '=',
        filter: '=',
        onSetFilter: '&',
        onCheckAll: '&',
        onRemoveCompleted: '&'
    },
    template: require('./bottom.html'),
    controller: controller
};

export default todoBottom;