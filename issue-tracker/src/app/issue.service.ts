import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { Issues } from './issues';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private _serviceURL = "http://localhost:3000/Issues";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private _httpClient: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this._httpClient.get<Issue[]>(this._serviceURL)
    .pipe(catchError(this.handleError));
  }

  getIssueById(id: number): Observable<Issue>{
    return this._httpClient.get<Issue>(`${this._serviceURL}/?id=${id}`)
      .pipe(catchError(this.handleError));
  }

  getIssuesByStatus(status: string): Observable<Issue[]> {
    return this._httpClient.get<Issue[]>(`${this._serviceURL}/?status=${status}`)
    .pipe(catchError(this.handleError));
  }

  getIssuesBySeverity(severity: string): Observable<Issue[]> {
    return this._httpClient.get<Issue[]>(`${this._serviceURL}/?severity=${severity}`)
    .pipe(catchError(this.handleError));
  }

  addIssue(newIssue: Issue): Observable<Issue>{
    return this._httpClient.post<Issue>(this._serviceURL, newIssue, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  editIssue(updatedIssue: Issue): Observable<void>{
    
    return this._httpClient.put<void>(`${this._serviceURL}/${updatedIssue.id}`, updatedIssue, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteIssue(issueId: number){
    return this._httpClient.delete(`${this._serviceURL}/${issueId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(errResponse: HttpErrorResponse){
    if(errResponse.error instanceof ErrorEvent){
      console.log("[Service] Client side error-",errResponse.error.message);
    }
    else{
      console.log("[Service]", errResponse);
    }

    return throwError("There is a issue with service!!");
  }
}
