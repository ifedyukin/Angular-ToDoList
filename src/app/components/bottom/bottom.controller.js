export default class todoBottom {
    removeCompleted() {
        this.onRemoveCompleted();
    }

    checkAll() {
        this.onCheckAll();
    }

    setFilter(filter) {
        this.onSetFilter({ $filter: filter });
    }
};