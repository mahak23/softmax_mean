// Angular
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthNoticeService, AuthService, } from '../../../../core/auth';

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
	loginForm: FormGroup;
	loading = false;
	errors: any;

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param fb: FormBuilder
	 * @param route
	 */
	constructor(
		private router: Router,
		private auth: AuthService,
		private authNoticeService: AuthNoticeService,
		private fb: FormBuilder,
	) {
	}

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.initLoginForm();
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.loading = false;
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initLoginForm() {
		this.loginForm = this.fb.group({
			email: ["", Validators.compose([
				Validators.required,
				Validators.email,
				Validators.minLength(3),
				Validators.maxLength(320)
			])
			],
			password: ["", Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			]
		});
	}

	/**
	 * Form Submit
	 */
	submit() {
		const controls = this.loginForm.controls;

		/** check form */
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;

		const authData = {
			email: controls.email.value,
			password: controls.password.value
		};
		this.auth
			.login(authData)
			.subscribe((response) => {
				this.loading = false;
				localStorage.setItem('user', JSON.stringify(response.data.user));
				localStorage.setItem('token', response.data.token);
				this.router.navigate(['/dashboard']); // Main page
			}, (error) => {
				this.loading = false;

				// Validation
				if (error.status == 422) {
					this.errors = error.error.errors;
				} else {
					// Other errors
					this.authNoticeService.setNotice(error.error.message, 'danger');
				}
			});
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

	/**
	 * Check for the backend error
	 * @param controlName 
	 * @returns 
	 */
	isControlHasBackendError(controlName) {
		if (this.errors) {
			return this.errors && this.errors.hasOwnProperty(controlName);
		}
		return false;
	}
}
