import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ElearningService {
  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getElearningList(page) {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/e-learnings', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  updateElearning(id) {
    this.token = localStorage.getItem('token');
    return this.http.patch(this.endPoint + '/e-learnings/' + id, null, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
