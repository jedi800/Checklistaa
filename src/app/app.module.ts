import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './filter.pipe';  
// import { SearchPipe } from "./filter.pipe";
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';  
@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    // SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
