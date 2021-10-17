import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  getNotices() {
    return this.http.get(this.endPoint + '/notices', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  deleteNotice(id) {
    return this.http.delete(this.endPoint + '/notices/'+id, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
