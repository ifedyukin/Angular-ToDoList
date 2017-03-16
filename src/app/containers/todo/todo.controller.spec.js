describe('todo controller', () => {
    let controller;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(_$componentController_ => {
        controller = _$componentController_('todoApp', null, null);
    }));

    it('should exist', () => {
        expect(controller.search).toBe('');
        expect(typeof (controller.searchItem)).toBe('function');
        expect(typeof (controller.setFilter)).toBe('function');
        expect(typeof (controller.filter)).toBeDefined();
    });

    describe('#method searchItem()', () => {

        beforeEach(() => {
            controller.search = '';
        });

        it('should search item', () => {
            let testSearch = 'test item';

            controller.searchItem(testSearch);
            expect(controller.search).toBe(testSearch);
        });
    });
});