import { Pipe, PipeTransform, Injectable, } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(tasks: any[], searchText: string): any[] {

    if (searchText) {
      searchText = searchText.toLowerCase();
      return tasks.filter(function (el: any) {
        return el.title.toLowerCase().indexOf(searchText) > -1;
      })
    }
    return tasks;
  }
}