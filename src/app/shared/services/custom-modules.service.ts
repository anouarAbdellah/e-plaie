import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomModulesService {

  constructor(private http: HttpClient) { }

  all(params): Observable<any> {
    return this.http.get(`${environment.url}/api/custom-modules`, params);
  }
  complete_list(): Observable<any> {
    return this.http.get(`${environment.url}/api/custom-modules/complete_list`);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/custom-modules/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.url}/api/custom-modules`, data);
  }
  find(id): Observable<any> {
    return this.http.get(`${environment.url}/api/custom-modules/${id}`);
  }

  all_elements(id, params): Observable<any> {
    return this.http.get(`${environment.url}/api/custom-modules/elements/list/${id}`, params);
  }
  update_elements(id, data): Observable<any> {
    return this.http.put(`${environment.url}/api/custom-modules/elements/${id}`, data);
  }
  create_elements(id, data): Observable<any> {
    return this.http.post(`${environment.url}/api/custom-modules/elements/${id}`, data);
  }
  find_elements(id): Observable<any> {
    return this.http.get(`${environment.url}/api/custom-modules/elements/${id}`);
  }
}
