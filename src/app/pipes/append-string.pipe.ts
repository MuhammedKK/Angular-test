import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendStringPipe implements PipeTransform {

  transform(value: string, appendedValue:string): string {
    if(value === null) return value;
    return value += appendedValue
  }

}
