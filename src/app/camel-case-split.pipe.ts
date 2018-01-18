import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseSplit'
})
export class CamelCaseSplitPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    console.log(value);
    if (!value) {
      return null;
    }
    return value.match(/[A-Z][a-z]+/g).join(' ');
  }

}
