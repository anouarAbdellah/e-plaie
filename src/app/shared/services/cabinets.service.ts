import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CabinetsService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/cabinets`, params);
  }
  update(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/cabinets/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/cabinets`, data);
  }
  status(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/cabinets/status/${id}`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/cabinets/${id}`);
  }
}
