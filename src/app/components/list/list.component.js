angular.module("ToDoList").component("todoList", {
    template: require('./list.html'),
    controller: ($scope, todoStorage) => {
        $scope.items = todoStorage.items;
        $scope.search = todoStorage.search;

        //Delete item 
        $scope.deleteItem = (id) => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id == id) {
                    $scope.items.splice(i, 1);
                }
            }
            todoStorage.setStore(todoStorage.items);
        }

        //Check item
        $scope.checkItem = (id) => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id == id) {
                    $scope.items[i].checked = !$scope.items[i].checked;
                }
            }
            todoStorage.setStore(todoStorage.items);
        }

        //Return filter
        $scope.filter = () => todoStorage.filter;

        //Return search text
        $scope.searchText = () => todoStorage.search;
    }
});