export default function (todoStorage) {
    this.items = todoStorage.items;
    this.search = todoStorage.search;

    //Delete item 
    this.deleteItem = (id) => {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i, 1);
            }
        }
        todoStorage.setStore(todoStorage.items);
    }

    //Check item
    this.checkItem = (id) => {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items[i].checked = !this.items[i].checked;
            }
        }
        todoStorage.setStore(todoStorage.items);
    }

    //Return filter
    this.filter = () => todoStorage.filter;

    //Return search text
    this.searchText = () => todoStorage.search;
};