import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from '../homework.service';

@Component({
  selector: 'kt-homework-create',
  templateUrl: './homework-create.component.html',
  styleUrls: ['./homework-create.component.scss']
})
export class HomeworkCreateComponent implements OnInit {
  homeworkForm: FormGroup;
  errors = [];
  homeworkId;
  classes = [];
  fileID = "";

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private route: Router, private router: ActivatedRoute, private homeworkService: HomeworkService) {
    this.homeworkId = this.router.snapshot.params.id
    //console.log(this.router.snapshot.params.id);
    this.homeworkForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required]],
      template_id: ['', [Validators.required]],
      homework: ['', [Validators.required, Validators.minLength(2)]],
      youtube_id: ['', [Validators.required, Validators.minLength(2)]],
      class_id: ['', [Validators.required]],
    });
  }

  file;

  ngOnInit() {
    this.getClasses();
    if (this.homeworkId) {
      this.gethomework();
    }
  }

  getClasses() {
    this.homeworkService.getClasses().subscribe((response: any) => {
      console.log(response);
      this.classes = response.data.classes;
    }, (error) => {
      console.log(error);
    });

  }

  gethomework() {
    this.homeworkService.gethomeworkById(this.homeworkId).subscribe((response: any) => {
      this.homeworkForm.setValue({
        description: response.data.homework.description,
        is_shown: response.data.homework.is_shown
      });
    }, (error) => {
      console.log(error);
    });
  }

  submitForm() {
    const controls = this.homeworkForm.controls;

    if (this.homeworkForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let data = this.homeworkForm.value;
    data.file_id = this.fileID;

    if (!this.homeworkId) {
      this.homeworkService
        .addhomework(data)
        .subscribe((response: any) => {
          this._snackBar.open(response.message, 'X');
          this.route.navigate(['/teacher/homeworks']); // Main page
        }, (error) => {
          // Validation
          if (error.status == 422) {
            this.errors = error.error.errors;
          } else {
            this._snackBar.open(error.error.message, 'X');
          }
        });
    } else {
      this.homeworkService
        .updatehomework(this.homeworkId, this.homeworkForm.value)
        .subscribe((response: any) => {
          this._snackBar.open(response.message, 'X');
          this.route.navigate(['/teacher/homeworks']); // Main page
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
    this.route.navigate(['/teacher/homeworks']);
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.homeworkForm.controls[controlName];
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

  uploadFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      this.homeworkService
        .uploadImage(formData)
        .subscribe((res: any) => {
          this._snackBar.open(res.message, 'X');
          console.log(res);
          this.fileID = res.data.file.id;
        },
          (error) => {
            // Validation
            if (error.status == 422) {
              this.errors = error.error.errors;
            } else {
              this._snackBar.open(error.error.message, 'X');
            }
          });
    }
  }

}
