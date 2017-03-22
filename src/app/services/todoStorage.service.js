var shortid = require('shortid');

angular.module("ToDoList").service("todoStorage", function todoStorage() {
    var self = this;

    self.getLocalItems = getLocalItems;
    self.saveLocalItems = saveLocalItems;

    self.addItem = addItem;
    self.removeItem = removeItem;
    self.toggleItem = toggleItem;

    self.removeCompleted = removeCompleted;
    self.checkAll = checkAll;

    self.items = self.getLocalItems();
    self.leftTodoCount = self.items.filter(function (item) {
        return !item.checked
    }).length;


    function getLocalItems() {
        var items = JSON.parse(localStorage.getItem("Items"));
        return items ? JSON.parse(localStorage.getItem("Items")) : [];
    }

    function saveLocalItems() {
        localStorage.setItem("Items", JSON.stringify(self.items));
    }

    function addItem(text) {
        function Item(text) {
            return {
                id: shortid.generate(),
                text: text,
                checked: false
            }
        }

        if (text) {
            self.items = self.items.concat(new Item(text));

            self.saveLocalItems();
            self.leftTodoCount++;
        }
    }

    function removeItem(id) {
        self.items = self.items.filter(function (item) {
            return item.id != id;
        });

        self.saveLocalItems();
        self.leftTodoCount--;
    }

    function toggleItem(id) {
        self.items = self.items.map(function (item) {
            if (item.id === id) {
                self.leftTodoCount = item.checked ? ++self.leftTodoCount : --self.leftTodoCount;
                return { id: item.id, text: item.text, checked: !item.checked }
            } else {
                return item
            }
        });

        self.saveLocalItems();
    }

    function removeCompleted() {
        self.items = self.items.filter(function (item) {
            return !item.checked;
        });

        self.saveLocalItems();
    }

    function checkAll() {
        self.items = self.items.map(function (item) {
            return item = { id: item.id, text: item.text, checked: true }
        });

        self.leftTodoCount = 0;
        self.saveLocalItems();
    }
});