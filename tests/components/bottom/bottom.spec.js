describe('bottom controller', function () {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should bind leftCount and filter "todoApp"', function () {
        var bindings = {
            leftCount: 1,
            filter: true
        };
        var controller = $componentController('todoBottom', null, bindings);

        expect(controller.leftCount).toEqual(bindings.leftCount);
        expect(controller.filter).toEqual(bindings.filter);
    });

    it('should call the "#onCheckAll" binding', function () {
        var onCheckAll = jasmine.createSpy('onCheckAll');
        var bindings = { onCheckAll };
        var controller = $componentController('todoBottom', null, bindings);

        controller.checkAll();

        expect(onCheckAll).toHaveBeenCalled();
    });

    it('should call the "#onRemoveCompleted" binding', function () {
        var onRemoveCompleted = jasmine.createSpy('onRemoveCompleted');
        var bindings = { onRemoveCompleted: onRemoveCompleted };
        var controller = $componentController('todoBottom', null, bindings);
        
        controller.removeCompleted();

        expect(onRemoveCompleted).toHaveBeenCalled();
    });

});