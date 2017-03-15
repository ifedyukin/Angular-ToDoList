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

  describe('.removeItem()', () => {
    it('should exist', function () {
      expect(todoStorage.removeItem).toBeDefined();
    });

    it('should delete one item', function () {
      todoStorage.items.push({
        id: "tested",
        text: "Test item",
        checked: false
      });

      let length = todoStorage.items.length;
      todoStorage.removeItem("tested");
      expect(length - todoStorage.items.length).toBe(1);
      expect(todoStorage.items).toBeDefined();
    });
  });

  describe('.checkItem()', () => {
    it('should exist', function () {
      expect(todoStorage.checkItem).toBeDefined();
    });

    it('should check item', function () {
      todoStorage.items.push({
        id: "tested",
        text: "Test item",
        checked: false
      });
      todoStorage.checkItem("tested");

      let length = todoStorage.items.length;
      expect(todoStorage.items[length - 1].checked).toBe(true);
      expect(todoStorage.items[length - 1].text).toBe("Test item");
      expect(todoStorage.items).toBeDefined();
    });

    it('should uncheck item', function () {
       todoStorage.items.push({
        id: "tested",
        text: "Test item",
        checked: true
      });
      todoStorage.checkItem("tested");

      let length = todoStorage.items.length;
      expect(todoStorage.items[length - 1].checked).toBe(false);
      expect(todoStorage.items[length - 1].text).toBe("Test item");
      expect(todoStorage.items).toBeDefined();
    });
  });
});