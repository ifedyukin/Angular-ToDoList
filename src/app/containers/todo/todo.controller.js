var todoApp = function todoApp(todoStorage, $scope, $routeParams) {
    var self = this;
    this.service = todoStorage;
    this.search = '';
    this.setFilter($routeParams.filter);

    $scope.$watch(function () {
        return self.service.items
    },
        function (newData) {
            self.leftCount = newData.filter(function (item) {
                return !item.checked
            }).length
        }
        , true);
}

todoApp.prototype.searchItem = function searchItem(text) {
    this.search = text;
}

todoApp.prototype.setFilter = function setFilter(filter) {
    switch (filter) {
        case 'active':
            this.filter = false;
            break;
        case 'completed':
            this.filter = true;
            break;
        default:
            this.filter = '';
            break;
    }
}

export default todoApp;