import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
}

clearMessage() {
    this.subject.next();
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}
}