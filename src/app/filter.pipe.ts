import { Pipe, PipeTransform, Injectable, } from '@angular/core';
@Pipe({
  name: 'filter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(tasks: any[], searchText: string): any[] {
    if (tasks && searchText) {
      return tasks.filter(el => el.title.toLowerCase().indexOf(searchText) > -1);
    }
    return tasks;
  }
}
