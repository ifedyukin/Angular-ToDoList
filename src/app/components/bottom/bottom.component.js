angular.module("ToDoList").component("todoBottom", {
    template: require('./bottom.html'),
    controller: ($scope, todoStorage) => {
        $scope.items = todoStorage.items;
        $scope.filter = todoStorage.filter;

        //Return left count
        $scope.count = () => {
            let count = 0;

            for (let i = 0; i < $scope.items.length; i++) {
                if (!$scope.items[i].checked) {
                    count++;
                }
            }

            return count;
        }

        //Check all items
        $scope.checkAll = () => {
            for (let i = 0; i < $scope.items.length; i++) {
                $scope.items[i].checked = true;
            }
            todoStorage.setStore(todoStorage.items);
        }

        //Delete checked items
        $scope.deleteChecked = () => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].checked) {
                    $scope.items.splice(i, 1);
                    i--;
                }
            }
            todoStorage.setStore(todoStorage.items);
        }

        //Set filter
        $scope.filterSet = (filter) => {
            switch (filter) {
                case 'active':
                    todoStorage.filter = false;
                    break;
                case 'completed':
                    todoStorage.filter = true;
                    break;
                case 'all':
                    todoStorage.filter = '';
                    break;
            }
        }

        //Return filter
        $scope.filterGet = () => todoStorage.filter;

    }
});