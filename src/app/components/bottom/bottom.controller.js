export default function (todoStorage) {
    this.items = todoStorage.items;
    this.filter = todoStorage.filter;

    //Return left count
    this.count = () => this.items.reduce((count, item) => !item.checked ? ++count : count, 0);

    //Check all items
    this.checkAll = () => {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].checked = true;
        }
        todoStorage.setStore(todoStorage.items);
    }

    //Delete checked items
    this.deleteChecked = () => {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].checked) {
                this.items.splice(i, 1);
                i--;
            }
        }
        todoStorage.setStore(todoStorage.items);
    }

    //Set filter
    this.filterSet = (filter) => {
        switch (filter) {
            case 'active':
                todoStorage.filter = false;
                break;
            case 'completed':
                todoStorage.filter = true;
                break;
            case 'all':
                todoStorage.filter = '';
                break;
        }
    }

    //Return filter
    this.filterGet = () => todoStorage.filter;

};