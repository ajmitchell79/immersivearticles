import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KeywordsService {
    getKeywords() {
      return ['JPMorgan', 'Euromoney', 'Troy Rohrbaugh', 'in the piece I wrote for last year’s survey'];
    }
  }