describe('list controller', function () {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should bind items, filter, search "todoApp"', function () {
        var items = [1, 2, 3];
        var filter = 'test filter';
        var search = 'test search';
        var bindings = {
            items: items,
            filter: filter,
            search: search
        };
        var controller = $componentController('todoList', null, bindings);

        expect(controller.items).toEqual(bindings.items);
        expect(controller.filter).toEqual(bindings.filter);
        expect(controller.search).toEqual(bindings.search);
    });

    it('should call the "#onToggle" binding', function () {
        var onToggle = jasmine.createSpy('onSetFilter');
        var bindings = { onToggle: onToggle };
        var controller = $componentController('todoList', null, bindings);

        controller.toggleItem(1);

        expect(onToggle).toHaveBeenCalledWith({ $id: 1 });
    });

    it('should call the "#onRemove" binding', function () {
        var onRemove = jasmine.createSpy('onSetFilter');
        var bindings = { onRemove: onRemove };
        var controller = $componentController('todoList', null, bindings);
        
        controller.removeItem(1);

        expect(onRemove).toHaveBeenCalledWith({ $id: 1 });
    });

});