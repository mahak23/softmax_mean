import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getHomework(page) {
    return this.http.get(this.endPoint + '/homeworks?page=' + page, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  deleteHomework(id) {
    return this.http.delete(this.endPoint + '/homeworks/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  gethomeworkById(id) {
    return this.http.get(this.endPoint + '/homeworks/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  addhomework(values) {
    return this.http.post(this.endPoint + '/homeworks/', values, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  updatehomework(id, values) {
    return this.http.put(this.endPoint + '/homeworks/' + id, values, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  getClasses() {
    return this.http.get(this.endPoint + '/classes/', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  uploadImage(values) {
    return this.http.post(this.endPoint + '/files/', values, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
