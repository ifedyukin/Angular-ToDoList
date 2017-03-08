import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';
import angular from 'angular';
import { storeGet, storeSave } from './utils/storage';

const ToDoList = angular.module("ToDoList", []);

const todoStorage = ToDoList.factory("todoStorage", () => {
    //Item constructor
    function item(text, id) {
        this.id = id;
        this.text = text;
        this.checked = false;
    }

    let items = [];

    //Save items to the local storage
    let setStore = (set) => {
        storeSave(set);
        getStore();
    }

    //Get items from the local storage
    let getStore = () => {
        items = storeGet();
        items = items === null ? [] : items;
    }
    getStore();

    return {
        item,
        items, setStore,
        lastId: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        search: '',
        filter: ''
    }
});

ToDoList.component("todoApp", {
    template: require('./app.html'),
    controller: ($scope, todoStorage) => { }
});

require('./components/index');