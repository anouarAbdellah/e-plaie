import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoundsService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/wounds`, params);
  }
  update(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/wounds/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/wounds`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/wounds/${id}`);
  }
}
