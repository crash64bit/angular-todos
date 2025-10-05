import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'todosCount'})
export class TodosCountPipe implements PipeTransform {
  transform(value: number): string {
    return value + ' ' + (value === 1 ? 'Item left' : 'Items left');
  }
}
