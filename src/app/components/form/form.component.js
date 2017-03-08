import isBlank from '../../utils/isBlank';

angular.module("ToDoList").component("todoForm", {
    template: require('./form.html'),
    controller: ($scope, todoStorage) => {
        //Add item 
        $scope.addItem = () => {
            if (isBlank($scope.input)) {
                todoStorage.items.push(new todoStorage.item($scope.input, todoStorage.lastId++));
                todoStorage.setStore(todoStorage.items);
                todoStorage.search = $scope.input = "";
            } else {
                window.alert('Empty value!');
            }
        }

        //Search
        $scope.search = () => {
            todoStorage.search = $scope.input;
        }
    }
});