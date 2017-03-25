describe('todo controller', function () {
    var controller;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_$componentController_) {
        controller = _$componentController_('todoApp');
    }));

    it('should exist', function () {
        expect(controller.search).toBe('');
        expect(typeof (controller.searchItem)).toBe('function');
        expect(typeof (controller.setFilter)).toBe('function');
        expect(typeof (controller.filter)).toBeDefined();
    });

    describe('#searchItem()', function () {

        beforeEach(function () {
            controller.search = '';
        });

        it('should search item', function () {
            var testSearch = 'test item';

            controller.searchItem(testSearch);
            expect(controller.search).toBe(testSearch);
        });
    });

    describe('#setFilter()', function () {
        beforeEach(inject(function (_$routeParams_) {
            $routeParams = _$routeParams_;
            $routeParams.filter = 'completed';
        }));

        it('should call the "#setFilter"', function () {
            controller.setFilter($routeParams.filter);
            expect(controller.filter).toBe(true);
        });
    });

});