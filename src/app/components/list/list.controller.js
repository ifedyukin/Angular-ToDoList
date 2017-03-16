export default class todoList {
    removeItem(id) {
        this.onRemove({ $id: id });
    }

    toggleItem(id) {
        this.onToggle({ $id: id });
    }
};