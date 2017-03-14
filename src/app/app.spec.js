describe('Items factory', () => {
  let items, todoStorage;

  beforeEach(angular.mock.module('ToDoList'));

  beforeEach(inject((_todoStorage_) => {
    todoStorage = _todoStorage_;
    todoStorage.items = [];
  }))

  it('should exist', function () {
    expect(todoStorage).toBeDefined();
  });

  describe('.items', () => {
    it('should exist', function () {
      expect(todoStorage.items).toBeDefined();
    });
  });

  describe('.addItem()', () => {
    it('should exist', function () {
      expect(todoStorage.addItem).toBeDefined();
    });

    it('should add new item', function () {
      todoStorage.addItem("Test item");
      let length = todoStorage.items.length;
      expect(todoStorage.items[length - 1].checked).toBe(false);
      expect(todoStorage.items[length - 1].text).toBe("Test item");
      expect(todoStorage.items).toBeDefined();
    });
  });
});