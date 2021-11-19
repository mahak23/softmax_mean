import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../notice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'kt-notice-create',
  templateUrl: './notice-create.component.html',
  styleUrls: ['./notice-create.component.scss']
})
export class NoticeCreateComponent implements OnInit {

  noticeForm: FormGroup;
  errors = [];
  loading = false;
  noticeId;
  noticeData;
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private route: Router,private router: ActivatedRoute, private noticeService: NoticeService) {
   this.noticeId=this.router.snapshot.params.id
    //console.log(this.router.snapshot.params.id);
    this.noticeForm = fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      is_shown: [false],
    });
  }

  ngOnInit() {
    if(this.noticeId){
      this.getNotice();
    }
  }

  getNotice(){
    this.noticeService.getNoticeById(this.noticeId).subscribe((response: any) => {
      console.log(response, "Notice data");
    this.noticeForm.setValue({
      description: response.data.notice.description,
      is_shown: response.data.notice.is_shown
    });
    }, (error) => {
      console.log(error);
    });
  }

  submitForm() {
     const controls = this.noticeForm.controls;

     if (this.noticeForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    if(!this.noticeId) {
      this.noticeService
      .addNotice(this.noticeForm.value)
      .subscribe((response:any) => {
        this._snackBar.open(response.message, 'X');
        this.route.navigate(['/teacher/notices']); // Main page
      }, (error) => {
        // Validation
        if (error.status == 422) {
          this.errors = error.error.errors;
        } else {
          this._snackBar.open(error.error.message, 'X');
        }
      });
    } else {
      this.noticeService
      .updateNotice(this.noticeId, this.noticeForm.value)
      .subscribe((response:any) => {
        this._snackBar.open(response.message, 'X');
        this.route.navigate(['/teacher/notices']); // Main page
      }, (error) => {
        // Validation
        if (error.status == 422) {
          this.errors = error.error.errors;
        } else {
          this._snackBar.open(error.error.message, 'X');
        }
      });
    }
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
