import angular from 'angular';
import 'angular-route';

import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';

var todoApp = require('./containers/todo/todo.component.js');
var todoConfig = require('./containers/todo/todo.config');
var todoStorage = require('./services/todo.service');

import todoBottom from './components/bottom/bottom.component';
import todoForm from './components/form/form.component';
import todoList from './components/list/list.component';

var ToDoList = angular
    .module("ToDoList", ['ngRoute'])
    .config(todoConfig)
    .service('todoStorage', todoStorage)
    .component('todoApp', todoApp)
    .component('todoBottom', todoBottom)
    .component('todoForm', todoForm)
    .component('todoList', todoList);