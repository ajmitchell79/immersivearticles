import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'highlight'
})
export class Highlight implements PipeTransform {
   transform(base: string): string {
      return "<span style=\"background-color: green\">" + base + "</span>";
   }
} 