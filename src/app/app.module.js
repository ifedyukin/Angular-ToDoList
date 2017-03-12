import angular from 'angular';
import 'angular-route';

import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';

import todoApp from './containers/todo/app.component';
import todoConfig from './containers/todo/app.config';
import todoStorage from './services/app.service';

import todoBottom from './components/bottom/bottom.component';
import todoForm from './components/form/form.component';
import todoList from './components/list/list.component';

const ToDoList = angular
    .module("ToDoList", ['ngRoute'])
    .config(todoConfig)
    .service('todoStorage', todoStorage)
    .component('todoApp', todoApp)
    .component('todoBottom', todoBottom)
    .component('todoForm', todoForm)
    .component('todoList', todoList);