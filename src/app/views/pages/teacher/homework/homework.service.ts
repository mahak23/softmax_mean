import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  getHomework() {
    return this.http.get(this.endPoint + '/homeworks', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  deleteHomework(id) {
    return this.http.delete(this.endPoint + '/homeworks/'+id, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
