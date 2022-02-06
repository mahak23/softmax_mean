import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getNotices(page) {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/notices?page=' + page, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  deleteNotice(id) {
    this.token = localStorage.getItem('token');
    return this.http.delete(this.endPoint + '/notices/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  addNotice(values) {
    this.token = localStorage.getItem('token');
    return this.http.post(this.endPoint + '/notices', values, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  getNoticeById(noticeId) {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/notices/' + noticeId, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  updateNotice(noticeId, values) {
    this.token = localStorage.getItem('token');
    return this.http.put(this.endPoint + '/notices/' + noticeId, values, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
