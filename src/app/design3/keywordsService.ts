import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KeywordsService {
    getKeywords() {
      return JSON.parse("{\"keywords\": [\"JP Morgan\", \"Euromoney\"]}");
    }
  }