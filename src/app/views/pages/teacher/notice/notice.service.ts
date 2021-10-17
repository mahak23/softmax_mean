import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
public token;
  public endPoint = "http://localhost:8000/api/teacher";
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
