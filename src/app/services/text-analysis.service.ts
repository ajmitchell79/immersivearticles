import { Injectable } from '@angular/core';
import { BingEntity } from '../models/bing/bingEntity';
import { HttpClient } from '@angular/common/http';
import { BingEntityResponse } from '../models/bing/bingEntityResponse';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  constructor(private http: HttpClient) { }

  analyze(text: string) {
    const url = 'http://localhost:5000/api/entities';
    const body = {
      text: text
    };
    console.log('calling: ' + url);
    return this.http.post<BingEntityResponse>(url, body);
  }
}
