describe('bottom controller', () => {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should bind leftCount and filter "todoApp"', () => {
        const bindings = {
            leftCount: 1,
            filter: true
        };
        const controller = $componentController('todoBottom', null, bindings);
        expect(controller.leftCount).toEqual(bindings.leftCount);
        expect(controller.filter).toEqual(bindings.filter);
    });

    it('should call the "#onSetFilter" binding', () => {
        const onSetFilter = jasmine.createSpy('onSetFilter');
        const bindings = {onSetFilter};
        const controller = $componentController('todoBottom', null, bindings);
        let filter = 'filter';
        controller.setFilter(filter);

        expect(onSetFilter).toHaveBeenCalledWith({$filter: filter});
    });

    it('should call the "#onCheckAll" binding', () => {
        const onCheckAll = jasmine.createSpy('onCheckAll');
        const bindings = {onCheckAll};
        const controller = $componentController('todoBottom', null, bindings);
        controller.checkAll();

        expect(onCheckAll).toHaveBeenCalled();
    });

    it('should call the "#onRemoveCompleted" binding', () => {
        const onRemoveCompleted = jasmine.createSpy('onRemoveCompleted');
        const bindings = {onRemoveCompleted};
        const controller = $componentController('todoBottom', null, bindings);
        controller.removeCompleted();

        expect(onRemoveCompleted).toHaveBeenCalled();
    });

});