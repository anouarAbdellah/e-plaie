import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/patients`, params);
  }
  update(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/patients/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/patients`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/patients/${id}`);
  }

  all_ptsi(params): Observable<any> {
    return this.http.get(`${environment.url}/api/ptsis`, params);
  }
  update_ptsi(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/ptsis/${id}`, data);
  }
  create_ptsi(data): Observable<any> {
    return this.http.post(`${environment.url}/api/ptsis`, data);
  }
  find_ptsi(id): Observable<any> {
    return this.http.get(`${environment.url}/api/ptsis/${id}`);
  }
}
