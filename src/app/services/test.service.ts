import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError ,  map, flatMap,retryWhen, take, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface IData { 
 myValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  postData(inputVal: string): Observable<IData[]> {
  
     let inputVal1 =  JSON.stringify(inputVal)
 
            return this.http.post<IData[]>(environment.testApi,
          inputVal1, {headers: this.authenticationService.GetContentTypeHeaderJson()})
            .pipe(
             map((response: IData[]) => response),
             catchError((err: Response) => {
                    return observableThrowError(err);
                   
             })
           )
           }

  getData(eventNumber: number): Observable<IData> {

            return this.http.get(environment.testApi +   + eventNumber,
              { headers: this.authenticationService.GetContentTypeHeaderJson() }
              )
              .pipe(
                map((response: IData) => 
                response
                ),
                catchError((err: Response) => {
                  return observableThrowError(err);
                })
              )
          }
 
}
