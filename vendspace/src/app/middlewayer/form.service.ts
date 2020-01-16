import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
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
export class FormService {
  loggeduser : any;
  constructor(private http : HttpClient) { }
  userdata (user: User,uri:string): Observable<any> {
    let target_uri = `http://localhost:3000/${uri}`;
    return this.http.post<User>(target_uri, user,httpOptions)
    .pipe(
        map((res: any) => {
        return res;
        }),
        catchError(err => {
        return this.handleError;
        })
    );  
  }
  sessionlogin(user) {
    console.log('Logging In')
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    // this.loggedInUser$.next(true);
    }
  sessionlogout() {
    sessionStorage.removeItem("currentUser");
    // this.loggedInUser$.next(false);
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
