import { Pipe, PipeTransform } from '@angular/core';

type Args = 'keyval'|'key'|'value';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {
  transform(obj: {}, arg: Args = 'keyval') {
    return arg === 'keyval' ?
        Object.keys(obj).map(key => ({key: key, value: obj[key]})) :
      arg === 'key' ?
        Object.keys(obj) :
      arg === 'value' ?
        Object.keys(obj).map(key => obj[key]) :
      null;
  }
}