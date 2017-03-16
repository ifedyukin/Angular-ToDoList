import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import shortid from 'shortid';

export default class todoStorage {
    constructor($rootScope, $q) {
        $q((resolve) => {
            let items = getLocalStorage();
            if (items !== null) {
                resolve(items);
            } else {
                resolve([]);
            }
        })
            .then(result => this.items = result)
            .catch(error => console.error(error));
    }

    addItem(text) {
        if (text != undefined && text.trim().length) {
            this.items = this.items.concat({
                id: shortid.generate(),
                text,
                checked: false
            });
            setLocalStorage(this.items);
        }
    }

    removeItem(id) {
        this.items = this.items.filter(item => (item.id != id));
        setLocalStorage(this.items);
    }

    toggleItem(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
        setLocalStorage(this.items);
    }

    removeCompleted() {
        this.items = this.items.filter(item => !item.checked);
        setLocalStorage(this.items);
    }

    checkAll() {
        this.items = this.items.map(item => item = { ...item, checked: true });
        setLocalStorage(this.items);
    }
};