function todoBottomController() {
    var self = this;

    self.removeCompleted = function () {
        self.onRemoveCompleted();
    }

    self.checkAll = function () {
        self.onCheckAll();
    }
}

angular.module("ToDoList").component('todoBottom', {
    bindings: {
        leftCount: '<',
        filtersLinks: '<',
        onSetFilter: '&',
        onCheckAll: '&',
        onRemoveCompleted: '&'
    },
    template: require('./bottom.html'),
    controller: todoBottomController
});