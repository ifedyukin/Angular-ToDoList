describe('todo service', () => {
    let todoStorage;

    beforeEach(angular.mock.module('ToDoList'));

    beforeEach(inject((_todoStorage_) => {
        todoStorage = _todoStorage_;
        todoStorage.items = [];
    }));

    it('should exist', () => {
        expect(todoStorage).toBeDefined();
        expect(typeof (todoStorage.addItem)).toBe('function');
        expect(typeof (todoStorage.removeItem)).toBe('function');
        expect(typeof (todoStorage.toggleItem)).toBe('function');
        expect(typeof (todoStorage.removeCompleted)).toBe('function');
        expect(typeof (todoStorage.checkAll)).toBe('function');
    });

    describe('#method addItem()', () => {

        beforeEach(() => {
            todoStorage.items = [];
        });

        it('should add new item', () => {
            todoStorage.addItem("Test item");
            expect(todoStorage.items[0].checked).toBe(false);
            expect(todoStorage.items[0].text).toBe("Test item");
        });

        it('should add empty item', () => {
            todoStorage.addItem();
            expect(todoStorage.items.length).toBe(0);
        });
    });

    describe('#method removeItem()', () => {
        let items = [{id: '1'}, {id: '2'}];

        beforeEach(() => {
            todoStorage.items = items;
        });

        it('should remove item', () => {
            todoStorage.removeItem('1');
            expect(todoStorage.items[0].id).toBe('2');
        });

        it('should remove null item', () => {
            todoStorage.removeItem('0');
            expect(todoStorage.items).toEqual(items);
        });
    });

    describe('#method toggleItem()', () => {
        let items = [{id: '1', checked: true}, {id: '2', checked: false}];

        beforeEach(() => {
            todoStorage.items = items;
        });

        it('should check item', () => {
            todoStorage.toggleItem('2');
            expect(todoStorage.items[0].checked).toBe(true);
        });

        it('should uncheck item', () => {
            todoStorage.toggleItem('1');
            expect(todoStorage.items[0].checked).toBe(false);
        });

        it('should toggle null item', () => {
            todoStorage.toggleItem('0');
            expect(todoStorage.items).toEqual(items);
        });
    });

    describe('#method removeCompleted()', () => {
        let items = [{checked: true}, {checked: true}, {checked: false}];

        beforeEach(() => {
            todoStorage.items = items;
        });

        it('should remove completed items', () => {
            todoStorage.removeCompleted();
            expect(todoStorage.items.length).toBe(1);
            expect(todoStorage.items[0].checked).toBe(false);
        });
    });

    describe('#method checkAll()', () => {
        let items = [{checked: false}];

        beforeEach(() => {
            todoStorage.items = items;
        });

        it('should check all items', () => {
            todoStorage.checkAll();
            expect(todoStorage.items[0].checked).toBe(true);
        });
    });

    //TODO: Test $q
});