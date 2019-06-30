import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fiter'
})
export class FiterPipe implements PipeTransform {

  transform(list: any[], fiterField: string, keyword: string): any {
    debugger;
    if (!fiterField || !keyword) {
      return list;
    }
    return list.filter(item => {
      const filedvalue = item[fiterField];
      return filedvalue.indexOf(keyword) >= 0;
    });
    return null;
  }

}
