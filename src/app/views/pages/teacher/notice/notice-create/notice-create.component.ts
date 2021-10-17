import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'kt-notice-create',
  templateUrl: './notice-create.component.html',
  styleUrls: ['./notice-create.component.scss']
})
export class NoticeCreateComponent implements OnInit {

  noticeForm: FormGroup;
  errors = [];
  loading = false;

  constructor(private fb: FormBuilder, private route: Router, private noticeService: NoticeService) {
    this.noticeForm = fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      is_shown: [false],
    });
  }

  ngOnInit() {
  }

  submitForm() {
    const controls = this.noticeForm.controls;

    /** check form */
    if (this.noticeForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.loading = true;
    this.noticeService
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

  back() {
    this.route.navigate(['/teacher/notices']);
  }

  /**
 * Checking control validation
 *
 * @param controlName: string => Equals to formControlName
 * @param validationType: string => Equals to valitors name
 */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.noticeForm.controls[controlName];
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
