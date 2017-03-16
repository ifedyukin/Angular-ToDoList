import shortid from 'shortid';

export default class todoStorage {
    constructor($q) {
        $q((resolve) => {
            let items = this.getLocalStorage();
            if (items !== null) {
                resolve(items);
            } else {
                resolve([]);
            }
        })
            .then(result => this.items = result)
            .catch(error => console.error(error));
    }

    getLocalStorage() {
        return JSON.parse(localStorage.getItem("Items"));
    }

    setLocalStorage() {
        localStorage.setItem("Items", JSON.stringify(this.items));
    }

    addItem(text) {
        if (text != undefined && text.trim().length) {
            this.items = this.items.concat({
                id: shortid.generate(),
                text,
                checked: false
            });
            this.setLocalStorage();
        }
    }

    removeItem(id) {
        this.items = this.items.filter(item => (item.id != id));
        this.setLocalStorage();
    }

    toggleItem(id) {
        this.items = this.items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
        this.setLocalStorage();
    }

    removeCompleted() {
        this.items = this.items.filter(item => !item.checked);
        this.setLocalStorage();
    }

    checkAll() {
        this.items = this.items.map(item => item = {...item, checked: true});
        this.setLocalStorage();
    }
};