import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { inject } from "@angular/core";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import { environment } from "../../../environments/environment";

export class BaseService<T> {

  protected http: HttpClient = inject(HttpClient);
  protected basePath: string = `${environment.serverBasePath}`;
  protected resourceEndpoint: string = '/resources';

  protected getHttpOptions() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  protected handleError(error: HttpErrorResponse) {
    // Si el código es 200, no es realmente un error
    if (error.status === 200) {
      console.log('Operación exitosa con código 200');
      return throwError(() => error.error);
    }

    if (error.error instanceof ErrorEvent) {
      console.log(`Cliente: ${error.error.message}`);
    } else {
      console.log(`Servidor: código ${error.status}, respuesta: ${JSON.stringify(error.error)}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  public create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, {
      ...this.getHttpOptions(),
      responseType: 'text'  // Especifica que la respuesta es texto plano
    }).pipe(
      map(response => {
        console.log('Delete successful:', response);
        return { success: true, message: response };
      }),
      catchError(this.handleError)
    );
  }

  public update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  public getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }
}
