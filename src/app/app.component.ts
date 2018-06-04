import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { SearchFilterPipe } from './filter.pipe';
import { Task } from './task/task.interface';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  tasksCompleted: any = [];
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

  removeCompleted = function (index) {
    this.tasksCompleted.splice(index, 1);
  }

  completed(task: string, ind: number) {
    this.tasksCompleted.push(task);
    this.tasks.splice(ind, 1);
  }

  uncheck(task: any, ind) {
    this.tasks.push(task);
    this.tasksCompleted.splice(ind, 1);
  }

  sortNew() {
    this.tasksCompleted = this.tasksCompleted.sort((a, b) => a.date.getTime() - b.date.getTime());
    this.tasks = this.tasks.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  sortOld() {
    this.tasksCompleted = this.tasksCompleted.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.tasks = this.tasks.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  sortAZ() {
    this.tasks = this.tasks.sort((a, b) => a.title.localeCompare(b.title));
    this.tasksCompleted = this.tasksCompleted.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZA() {
    this.tasks = this.tasks.sort((b, a) => a.title.localeCompare(b.title));
    this.tasksCompleted = this.tasksCompleted.sort((a, b) => b.title.localeCompare(a.title));
  }
}
