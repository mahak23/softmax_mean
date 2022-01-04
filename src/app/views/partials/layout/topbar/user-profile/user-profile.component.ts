import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	user: any;
	defaultImg = "/assets/media/users/default.jpg"
	@Input() avatar = false;
	@Input() greeting = true;
	@Input() badge = true;
	@Input() icon = true;

	constructor(private router: Router) {
	}

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.avatar = false;
		this.badge = true;
		this.icon = true;
		this.user = JSON.parse(localStorage.getItem('user'));

	}

	/**
	 * Log out
	 */
	logout() {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		this.router.navigate(['auth/login']);
	}
}
