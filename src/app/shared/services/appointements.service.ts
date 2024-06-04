import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointementsService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/appointements`, params);
  }
  update(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/appointements/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/appointements`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/appointements/${id}`);
  }
  status(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/appointements/status/${id}`, data);
  }

  all_consultations(params): Observable<any> {
    return this.http.get(`${environment.url}/api/consultations`, params);
  }
  update_consultations(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/consultations/${id}`, data);
  }
  create_consultations(data): Observable<any> {
    return this.http.post(`${environment.url}/api/consultations`, data);
  }
  find_consultations(id): Observable<any> {
    return this.http.get(`${environment.url}/api/consultations/${id}`);
  }
  status_consultations(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/consultations/status/${id}`, data);
  }
}
