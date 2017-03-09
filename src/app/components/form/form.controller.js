import isBlank from '../../utils/isBlank';

export default function (todoStorage) {
    //Add item 
    this.addItem = () => {
        if (isBlank(this.input)) {
            todoStorage.items.push(new todoStorage.item(this.input, todoStorage.lastId++));
            todoStorage.setStore(todoStorage.items);
            todoStorage.search = this.input = "";
        } else {
            window.alert('Empty value!');
        }
    }

    //Search
    this.search = () => {
        todoStorage.search = this.input;
    }
};