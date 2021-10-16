import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  public endPoint = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  getNotices() {
    let token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/notices', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}
