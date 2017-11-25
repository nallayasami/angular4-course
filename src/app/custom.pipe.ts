import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: String, limit?: number): any {
    if (!value) {
      return null;
    }
    if (value.length <= limit) {
      return value;
    } else {
      return value.substr(0, limit ? limit : 15) + ' ...';
    }
  }

}
