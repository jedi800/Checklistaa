import { Component, OnInit  } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import{SearchFilterPipe} from './filter.pipe'
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  tasks: Task[] = [];
  newTask = "  ";
  id = 1;
  itemFilter: any = { text: '' };
  tasksDone = [];
   title:String;
constructor() { 
  this.title = " ";
  this.tasks = []
}

ngOnInit() {
}



  pushTask = function () {
    // jesli ten element jest pusty dodaje nowy task
    if (this.newTask) {
      const newTaskObject: Task = {
        title: this.newTask,
        date: new Date(),
        done: false
      };
      this.tasks.push(newTaskObject);
      this.newTask = " ";
    }
  }

  // usuwanie
  removeTask = function (index) {
    this.tasks.splice(index, 1);
  }
  removeTask1 = function (index) {
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
  sortNowe() {
    this.tasksDone = this.tasksDone.sort((a, b) => a.date.getTime() - b.date.getTime());
    this.tasks = this.tasks.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  sortStare() {
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
export interface Task {
  title: string;
  date: Date;
  done: boolean;
}
