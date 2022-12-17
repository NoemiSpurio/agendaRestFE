import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Agenda } from 'src/app/model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiServer = 'http://localhost:8080/api/agenda';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAgende(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiServer)
  }

  getAgenda(id: number): Observable<Agenda> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Agenda>(url).pipe(
      tap(_ => console.log(`fetched Agenda id=${id}`)),
      catchError(this.handleError<Agenda>(`getAgenda id=${id}`))
    );
  }

  addAgenda(agendaInput: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.apiServer, agendaInput, this.httpOptions).pipe(
      tap((newAgenda: Agenda) => console.log(`added agenda w/ id=${newAgenda.id}`)),
      catchError(this.handleError<Agenda>('addAgenda'))
    );
  }


  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
