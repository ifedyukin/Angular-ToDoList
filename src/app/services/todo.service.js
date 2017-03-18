import shortid from 'shortid';

var todoStorage = function todoStorage($q) {
    var self = this;
    $q(function (resolve) {
        var items = self.getLocalStorage();
        if (items !== null) {
            resolve(items);
        } else {
            resolve([]);
        }
    })
        .then(function (result) {
            self.items = result
        })
        .catch(function (error) {
            console.error(error)
        });
}

todoStorage.prototype.getLocalStorage = function getLocalStorage() {
    return JSON.parse(localStorage.getItem("Items"));
}

todoStorage.prototype.setLocalStorage = function setLocalStorage() {
    localStorage.setItem("Items", JSON.stringify(this.items));
}

todoStorage.prototype.addItem = function addItem(text) {
    if (text != undefined && text.trim().length) {
        this.items = this.items.concat({
            id: shortid.generate(),
            text: text,
            checked: false
        });
        this.setLocalStorage();
    }
}

todoStorage.prototype.removeItem = function removeItem(id) {
    this.items = this.items.filter(function (item) {
        return item.id != id;
    });
    this.setLocalStorage();
}

todoStorage.prototype.toggleItem = function toggleItem(id) {
    this.items = this.items.map(function (item) {
        return item.id === id ? { id: item.id, text: item.text, checked: !item.checked } : item;
    });
    this.setLocalStorage();
}

todoStorage.prototype.removeCompleted = function removeCompleted() {
    this.items = this.items.filter(function (item) {
        return !item.checked;
    });
    this.setLocalStorage();
}

todoStorage.prototype.checkAll = function checkAll() {
    this.items = this.items.map(function (item) {
        return item = { id: item.id, text: item.text, checked: true }
    });
    this.setLocalStorage();
}

export default todoStorage;