describe('todo controller', () => {
    let controller;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject((_$componentController_) => {
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

    describe('#method setFilter()', () => {
        beforeEach(inject(_$routeParams_ => {
            $routeParams = _$routeParams_;
            $routeParams.filter = 'test filter';
        }));

        it('should call the "#setFilter"', () => {
            controller.setFilter($routeParams.filter);
            expect(controller.filter).toBe('');
        });
    });

    describe('$watch service.items', () => {
        beforeEach(inject((_$rootScope_) => {
            $scope = _$rootScope_;
        }));

        it('should update "leftCount" via $watch', () => {
            controller.service.items = [{checked: true}, {checked: false}];
            $scope.$digest();
            controller.service.items = [{checked: false}, {checked: false}];
            $scope.$digest();
            expect(controller.leftCount).toBe(2);
        });
    });
});