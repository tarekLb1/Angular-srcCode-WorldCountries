import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralise'
})
export class pluralise implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
