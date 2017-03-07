var ToDoList = angular.module("ToDoList", []);

ToDoList.factory("todoStorage", () => {
    //Item constructor
    function item(text, id = 1) {
        return {
            id, text,
            checked: false
        }
    }

    //TODO: Items storage in "Locale storage" via setter & getter

    return {
        item,
        lastid: 3,
        items: [
            { id: 1, checked: false, text: "First item" },
            { id: 2, checked: true, text: "2 item" }
        ],
        search: ""
    }
});

ToDoList.component("todoApp", {
    templateUrl: 'src/templates/app.template.html',
    controller: ($scope, todoStorage) => {
        // $scope.store = todoStorage; -> не наследуется в ToDoForm
    }
});

ToDoList.component("todoForm", {
    templateUrl: 'src/templates/form.template.html',
    controller: ($scope, todoStorage) => {
        //Add item 
        $scope.addItem = () => {
            todoStorage.items.push(new todoStorage.item($scope.NewItem, todoStorage.lastid++));
            $scope.NewItem = "";
        }

        //TODO: Search через фильтры

    }
});

ToDoList.component("todoList", {
    templateUrl: 'src/templates/list.template.html',
    controller: ($scope, todoStorage) => {
        $scope.items = todoStorage.items;

        //Delete item 
        $scope.deleteItem = (id) => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id == id) {
                    $scope.items.splice(i, 1);
                }
            }
        }

        //Check item
        $scope.checkItem = (id) => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id == id) {
                    $scope.items[i].checked = !$scope.items[i].checked;
                }
            }
        }
    }
});

ToDoList.component("todoBottom", {
    templateUrl: 'src/templates/bottom.template.html',
    controller: ($scope, todoStorage) => {
        $scope.items = todoStorage.items;

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
        }

        //Delete checked items
        $scope.deleteChecked = () => {
            for (let i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].checked) {
                    $scope.items.splice(i, 1);
                    i--;
                }
            }
        }

    }
});