import { storeGet, storeSave } from '../utils/storage';

export default function todoStorage() {
    //Item constructor
    function item(text, id) {
        this.id = id;
        this.text = text;
        this.checked = false;
    }

    let items = [];

    //Save items to the local storage
    let setStore = (set) => {
        storeSave(set);
        getStore();
    }

    //Get items from the local storage
    let getStore = () => {
        items = storeGet();
        items = items === null ? [] : items;
    }
    getStore();

    return {
        item,
        items, setStore,
        lastId: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        search: '',
        filter: ''
    }
};