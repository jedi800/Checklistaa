import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Task } from './task/task.component';
import { SearchFilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
  ],

  imports: [
    BrowserModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
