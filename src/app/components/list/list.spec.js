describe('list controller', () => {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should bind items, filter, search "todoApp"', () => {
        let items = [1,2,3];
        let filter = 'test filter';
        let search = 'test search';
        const bindings = {
            items,
            filter,
            search
        };

        const controller = $componentController('todoList', null, bindings);
        expect(controller.items).toEqual(bindings.items);
        expect(controller.filter).toEqual(bindings.filter);
        expect(controller.search).toEqual(bindings.search);
    });

    it('should call the "#onToggle" binding', () => {
        const onToggle = jasmine.createSpy('onSetFilter');
        const bindings = {onToggle};
        const controller = $componentController('todoList', null, bindings);
        controller.toggleItem(1);

        expect(onToggle).toHaveBeenCalledWith({$id: 1});
    });

    it('should call the "#onRemove" binding', () => {
        const onRemove = jasmine.createSpy('onSetFilter');
        const bindings = {onRemove};
        const controller = $componentController('todoList', null, bindings);
        controller.removeItem(1);

        expect(onRemove).toHaveBeenCalledWith({$id: 1});
    });

});