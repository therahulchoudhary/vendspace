import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Accept': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http : HttpClient) { }
  contactdata (contact: Contact,uri:string): Observable<any> {
    let target_uri = `http://localhost:3000/${uri}`;
    return this.http.post<Contact>(target_uri, contact,httpOptions)
    .pipe(
        map((res: any) => {
        return res;
        }),
        catchError(err => {
        return this.handleError;
        })
    );  
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
