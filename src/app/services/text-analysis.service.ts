import { Injectable } from '@angular/core';
import { BingEntity } from '../models/bing/bingEntity';
import { HttpClient } from '@angular/common/http';
import { BingEntityResponse } from '../models/bing/bingEntityResponse';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  entities: BingEntity[];

  constructor(private http: HttpClient) {
    this.entities = [
      {
        id: "https://www.bingapis.com/api/v7/#Entities.0",
        bingId: "0d47c987-0042-5576-15e8-97af601614fa",
        name: "Bill Gates",
        description: "William Henry Gates III is an American business magnate, investor, author, philanthropist, and humanitarian. He is best known as the principal founder of Microsoft Corporation. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, while also being the largest individual shareholder until May 2014.",
        image: {
          name: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
          hostPageUrl: "http://upload.wikimedia.org/wikipedia/commons/b/bd/Dts_news_bill_gates_wikipedia.JPG"
        }
      }
    ];
  }

  analyze(text: string) {
    const url = 'http://localhost:5000/api/entities';
    const body = {
      text: text
    };
    console.log('calling: ' + url);
    return this.http.post<BingEntityResponse>(url, body);
  }
}
