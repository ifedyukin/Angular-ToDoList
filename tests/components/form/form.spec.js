describe('form controller', function () {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should call the "#onSubmit" binding', function () {
        var onSubmit = jasmine.createSpy('onSubmit');
        var bindings = { onSubmit: onSubmit };
        var controller = $componentController('todoForm', null, bindings);
        var addText = 'test submit form';

        controller.addText = addText;
        controller.submitHandle();

        expect(onSubmit).toHaveBeenCalledWith({ $text: addText });
        expect(controller.addText).toBe('');
    });

    it('should call the "#onSearch" binding', function () {
        var onSearch = jasmine.createSpy('onSubmit');
        var bindings = { onSearch: onSearch };
        var controller = $componentController('todoForm', null, bindings);
        
        controller.searchHandle();

        expect(onSearch).toHaveBeenCalled();
    });

});