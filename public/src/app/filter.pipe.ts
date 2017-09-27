import { Pipe, PipeTransform } from '@angular/core';
import { Survey } from './survey';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Survey>, searchStr: string): Array<Survey> {
    if (!value) { return value; }

    return value.filter(survey => {
      return survey.question.toLowerCase().includes(searchStr.toLowerCase()) || survey.creator.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}