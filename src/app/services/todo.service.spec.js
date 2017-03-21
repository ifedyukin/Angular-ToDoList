describe('todo service', function () {
    var todoStorage;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject(function (_todoStorage_) {
        todoStorage = _todoStorage_;
        todoStorage.items = [];
    }));

    it('should exist', function () {
        expect(todoStorage).toBeDefined();
        expect(typeof (todoStorage.addItem)).toBe('function');
        expect(typeof (todoStorage.removeItem)).toBe('function');
        expect(typeof (todoStorage.toggleItem)).toBe('function');
        expect(typeof (todoStorage.removeCompleted)).toBe('function');
        expect(typeof (todoStorage.checkAll)).toBe('function');
    });

    describe('#addItem()', function () {

        beforeEach(function () {
            todoStorage.items = [];
        });

        it('should add new item', function () {
            todoStorage.addItem("Test item");
            expect(todoStorage.items[0].checked).toBe(false);
            expect(todoStorage.items[0].text).toBe("Test item");
        });

        it('should add empty item', function () {
            todoStorage.addItem();
            expect(todoStorage.items.length).toBe(0);
        });
    });

    describe('#removeItem()', function () {
        var items = [{ id: '1' }, { id: '2' }];

        beforeEach(function () {
            todoStorage.items = items;
        });

        it('should remove item', function () {
            todoStorage.removeItem('1');
            expect(todoStorage.items[0].id).toBe('2');
        });

        it('should remove null item', function () {
            todoStorage.removeItem('0');
            expect(todoStorage.items).toEqual(items);
        });
    });

    describe('#toggleItem()', function () {
        var items = [{ id: '1', checked: true }, { id: '2', checked: false }];

        beforeEach(function () {
            todoStorage.items = items;
        });

        it('should check item', function () {
            todoStorage.toggleItem('2');
            expect(todoStorage.items[0].checked).toBe(true);
        });

        it('should uncheck item', function () {
            todoStorage.toggleItem('1');
            expect(todoStorage.items[0].checked).toBe(false);
        });

        it('should toggle null item', function () {
            todoStorage.toggleItem('0');
            expect(todoStorage.items).toEqual(items);
        });
    });

    describe('#removeCompleted()', function () {
        var items = [{ checked: true }, { checked: true }, { checked: false }];

        beforeEach(function () {
            todoStorage.items = items;
        });

        it('should remove completed items', function () {
            todoStorage.removeCompleted();
            expect(todoStorage.items.length).toBe(1);
            expect(todoStorage.items[0].checked).toBe(false);
        });
    });

    describe('#checkAll()', function () {
        var items = [{ checked: false }];

        beforeEach(function () {
            todoStorage.items = items;
        });

        it('should check all items', function () {
            todoStorage.checkAll();
            expect(todoStorage.items[0].checked).toBe(true);
        });
    });

});