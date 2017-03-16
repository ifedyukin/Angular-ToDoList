describe('form controller', () => {
    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should call the "#onSubmit" binding', () => {
        const onSubmit = jasmine.createSpy('onSubmit');
        const bindings = {onSubmit};
        const controller = $componentController('todoForm', null, bindings);
        const addText = 'test submit form';
        controller.addText = addText;
        controller.submitHandle();

        expect(onSubmit).toHaveBeenCalledWith({$text: addText});
        expect(controller.addText).toBe('');
    });

    it('should call the "#onSearch" binding', () => {
        const onSearch = jasmine.createSpy('onSubmit');
        const bindings = {onSearch};
        const controller = $componentController('todoForm', null, bindings);
        controller.searchHandle();

        expect(onSearch).toHaveBeenCalled();
    });

});