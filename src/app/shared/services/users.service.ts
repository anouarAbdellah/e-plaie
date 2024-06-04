import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/users`, params);
  }
  update(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/users/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/users`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/users/${id}`);
  }
  status(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/users/status/${id}`, data);
  }
}
