import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  token
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) { }

  getStats() {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/stats', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
