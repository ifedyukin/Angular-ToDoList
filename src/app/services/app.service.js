import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import randomId from '../utils/idGenerator';

export default class todoStorage {
    constructor($rootScope) {
        this.items = getLocalStorage();

        $rootScope.$watchCollection(() => this.items,
            (newData, oldData) => {
                setLocalStorage(this.items);
            });
    }

    addItem(text) {
        this.items.push({
            id: randomId(),
            text,
            checked: false
        });
    }

    removeItem(id) {
        this.items = this.items.filter(item => (item.id != id));
    }

    checkItem(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    }

    removeCompleted() {
        this.items = this.items.filter(item => !item.checked);
    }

    checkAll() {
        this.items = this.items.map(item => item = { ...item, checked: true });
    }
};