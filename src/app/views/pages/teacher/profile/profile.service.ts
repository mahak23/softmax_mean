import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    public token;
    public endPoint = environment.api_url;
    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('token');
    }

    getProfile() {
        this.token = localStorage.getItem('token');
        return this.http.get(this.endPoint + '/profile', {
            headers: {
                Authorization: 'Bearer ' + this.token
            }
        });
    }


}
