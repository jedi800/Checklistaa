import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Task } from './task/task.component';
import { SearchFilterPipe } from './filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  id = 1;
  itemFilter: any = {text: ''};
  tasksDone = [];
  title: string;
 
  ngOnInit() {
    this.title = '';
    this.tasks = [];
  }

  pushTask = function (index) {
    if (this.newTask) {
      const newTaskObject: Task = {
        title: this.newTask,
        date: new Date(),
        done: false
      };

      this.tasks.push(newTaskObject);
      this.newTask = "";
    }
  }

  removeTask = function (index) {
    this.tasks.splice(index, 1);
  }

  removeChecked = function (index) {
    this.tasksDone.splice(index, 1);
  }

  done(task: string, ind) {
    this.tasksDone.push(task);
    this.tasks.splice(ind, 1);
  }

  uncheck(task: string, ind) {
    this.tasksDone.splice(ind, 1);
    this.tasksDone.push(task);
  }

  sortNew() {
    this.tasksDone = this.tasksDone.sort((a, b) => a.date.getTime() - b.date.getTime());
    this.tasks = this.tasks.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  sortOld() {
    this.tasksDone = this.tasksDone.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.tasks = this.tasks.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  sortAZ() {
    this.tasks = this.tasks.sort((a, b) => a.title.localeCompare(b.title));
    this.tasksDone = this.tasksDone.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZA() {
    this.tasks = this.tasks.sort((b, a) => a.title.localeCompare(b.title));
    this.tasksDone = this.tasksDone.sort((a, b) => b.title.localeCompare(a.title));
  }
}