import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BilansService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/bilans`, params);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/bilans/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/bilans`, data);
  }
  status(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/bilans/status/${id}`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/bilans/${id}`);
  }
}
