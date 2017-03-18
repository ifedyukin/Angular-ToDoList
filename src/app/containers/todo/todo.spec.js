describe('todo controller', function () {
    var controller;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_$componentController_) {
        controller = _$componentController_('todoApp', null, null);
    }));

    it('should exist', function () {
        expect(controller.search).toBe('');
        expect(typeof (controller.searchItem)).toBe('function');
        expect(typeof (controller.setFilter)).toBe('function');
        expect(typeof (controller.filter)).toBeDefined();
    });

    describe('#method searchItem()', function () {

        beforeEach(function () {
            controller.search = '';
        });

        it('should search item', function () {
            var testSearch = 'test item';

            controller.searchItem(testSearch);
            expect(controller.search).toBe(testSearch);
        });
    });

    describe('#method setFilter()', function () {
        beforeEach(inject(function (_$routeParams_) {
            $routeParams = _$routeParams_;
            $routeParams.filter = 'test filter';
        }));

        it('should call the "#setFilter"', function () {
            controller.setFilter($routeParams.filter);
            expect(controller.filter).toBe('');
        });
    });

    describe('$watch service.items', function () {
        beforeEach(inject(function (_$rootScope_) {
            $scope = _$rootScope_;
        }));

        it('should update "leftCount" via $watch', function () {
            controller.service.items = [{ checked: true }, { checked: false }];
            $scope.$digest();
            controller.service.items = [{ checked: false }, { checked: false }];
            $scope.$digest();
            expect(controller.leftCount).toBe(2);
        });
    });
});