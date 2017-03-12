export default class todoList {
    removeItem(id) {
        this.onRemove({ $id: id });
    }

    checkItem(id) {
        this.onCheck({ $id: id });
    }
};