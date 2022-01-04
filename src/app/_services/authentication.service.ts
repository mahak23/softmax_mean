import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }
    gettoken() {
        return !!localStorage.getItem("user");
    }


}