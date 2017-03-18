var todoList = function todoList() {
    this.removeItem = function (id) {
        this.onRemove({ $id: id });
    }

    this.toggleItem = function (id) {
        this.onToggle({ $id: id });
    }
}

export default todoList;