describe('todoStorage', function () {
    describe('todoStorage', function () {

        it('should create 3 items', inject(function (todoStorage, $scope, $routeParams) {
            var ctrl = $componentController('todoApp');
            ctrl.addItem("Test 1");
            ctrl.addItem("Test 2");
            ctrl.addItem("Test 3");
            expect(ctrl.items.length).toBe(3);
        }));

    });

});