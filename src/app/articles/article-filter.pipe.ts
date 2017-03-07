import { PipeTransform, Pipe } from '@angular/core';
import * as _ from 'underscore';

@Pipe ({
    name: 'ArticleFilter'
})

export class ArticleFilterPipe implements PipeTransform {
  transform(value: any[], filterBy: string) {
    var newArray: any[] = [];
    if (value==null) {
      return null;
    }

    newArray = value.filter((item) => item.headLine.toLowerCase().indexOf(filterBy) >= 0 );
    return newArray;
  }
}