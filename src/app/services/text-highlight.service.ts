import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextHighlightService {

  constructor() { }

  splitText(text : string, entities){
    let chunks = [];
    let index = 0;
    for(let i=0; i<entities.length; i++){
      const match = entities[i].location.matches[0];
      const name = entities[i].location.name;
      chunks.push({content: text.substr(index, match.offset-index), name: ''});
      chunks.push({content: text.substr(match.offset, match.length), name: entities[i].location.name});
      index = match.offset + match.length;
      console.log('Plain text from ' + index + ' to ' + match.offset);
      console.log('Adding ' + name + ' at ' + match.offset + ' - ' + match.length);
    }
    return chunks;
  }
}
