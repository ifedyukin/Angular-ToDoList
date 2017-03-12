export default class todoApp {
    constructor(todoStorage, $scope, $routeParams) {
        this.service = todoStorage;
        this.search = '';
        this.setFilter($routeParams.filter);

        new Promise((resolve, reject) => {
            let items = this.service.items;
            if (items !== null) {
                resolve(items);
            } else {
                resolve([]);
            }
        })
            .then(result => this.service.items = result)
            .catch(error => console.error(error));

        $scope.$watchCollection(() => this.service.items,
            (newData, oldData) => {
                this.items = newData;
                this.leftCount = this.items !== null ? this.items.filter(item => !item.checked).length : 0;
            });
    }

    searchItem(text) {
        this.search = text;
    }

    //list

    addItem(text) {
        this.service.addItem(text);
    }

    removeItem(id) {
        this.service.removeItem(id);
    }

    checkItem(id) {
        this.service.checkItem(id);
    }

    //bottom

    removeCompleted() {
        this.service.removeCompleted();
    }

    checkAll() {
        this.service.checkAll();
    }

    setFilter(filter) {
        switch (filter) {
            case 'active':
                this.filter = false;
                break;
            case 'completed':
                this.filter = true;
                break;
            default:
                this.filter = '';
                break;
        }
    }

};