import isBlank from '../../utils/isBlank';

export default function (todoStorage) {
    this.store = todoStorage;
    
    //Add item 
    this.addItem = () => {
        if (isBlank(this.input)) {
            this.store.items.push(new this.store.item(this.input, this.store.lastId++));
            this.store.setStore(this.store.items);
            this.store.search = this.input = "";
        } else {
            window.alert('Empty value!');
        }
    }

    //Search
    this.search = () => {
        this.store.search = this.input;
    }
};