import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces' // THIS HOW WE REFER TO THE PIPE IN TEMPLATE
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(
      value: string, // a value to be transformed, a property that pipe is attached to goes here
      character: string // a character to be replaced, first arg passed to pipe in template goes here
    ): string {
          
    return value.replace(character, " ");
  }
}
