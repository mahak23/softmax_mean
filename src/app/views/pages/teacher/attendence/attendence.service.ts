import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getStudentList(data) {
    const params = new HttpParams().append('class_id', data);
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/students', {
      params,
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
  getClassList() {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/classes', {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  getSubjectList(data) {
    const params = new HttpParams().append('class_id', data);
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/subjects', {
      params,
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }


  updateAttendence(id) {
    this.token = localStorage.getItem('token');
    return this.http.patch(this.endPoint + '/attendence/' + id, null, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
