function todoFormController() {
    var self = this;

    self.submitHandle = function () {
        self.onSubmit({ $text: self.addText });
        self.addText = '';
    }

    self.searchHandle = function () {
        self.onSearch({ $text: self.searchText });
    }
}

angular.module("ToDoList").component('todoForm', {
    bindings: {
        onSubmit: '&',
        onSearch: '&'
    },
    template: require('./form.html'),
    controller: todoFormController
});