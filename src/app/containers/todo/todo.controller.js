export default class todoApp {
    constructor(todoStorage, $scope, $routeParams) {
        this.service = todoStorage;
        this.search = '';
        this.setFilter($routeParams.filter);

        $scope.$watch(() => this.service.items,
            (newData) => this.leftCount = newData.filter(item => !item.checked).length
            , true);
    }

    searchItem(text) {
        this.search = text;
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