var todoBottom = function todoBottom() {
    this.removeCompleted = function () {
        this.onRemoveCompleted();
    }

    this.checkAll = function () {
        this.onCheckAll();
    }

    this.setFilter = function (filter) {
        this.onSetFilter({ $filter: filter });
    }
}

export default todoBottom;