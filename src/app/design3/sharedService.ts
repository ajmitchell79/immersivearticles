import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService {
  private classSubject = new Subject<any>();
  private relatedCntSubject = new Subject<any>();

    setClass(message: string) {
        this.classSubject.next({ text: message });
    }

    getClass(): Observable<any> {
        return this.classSubject.asObservable();
    }

    setRelatedCnt(message: string) {
        this.relatedCntSubject.next({ text: message });
    }

    getRelatedCnt(): Observable<any> {
        return this.relatedCntSubject.asObservable();
    }    
}