// ye save attendance ke liye h attendance list alg se bnega ek jisme saved attendance aajengi

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AttendenceService } from '../attendence.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'kt-attendence-list',
  templateUrl: './attendence-list.component.html',
  styleUrls: ['./attendence-list.component.scss']
})
export class AttendenceListComponent implements OnInit {
  clsdata: any = []
  clsId = ''
  subId = ''
  subjectdata: any = []
  allTrue: boolean = true
  constructor(public datepipe: DatePipe, public dialog: MatDialog, private attendenceService: AttendenceService, private router: Router) { }
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = [
    'sr_no', 'name', 'father_name'
  ];
  selection = new SelectionModel(true, []);

  pageData = {
    current_page: 0,
    total: 0,
    per_page: 20,
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getClassList();
  }

  setAbsent(record) {
    console.log(record)
  }

  getClassList() {
    this.attendenceService.getClassList().subscribe((response: any) => {
      this.clsdata = response.data.classes;
    }, (error) => {
      console.log(error);
    });
  }

  changeClass(cls) {
    if (cls) {
      this.clsId = cls
      this.getSubjectList(cls)
      this.getStudent();
    }
  }

  changesubject(subject) {
    if (subject) {
      this.subId = subject;
    }
  }

  getSubjectList(cls) {
    this.attendenceService.getSubjectList(cls).subscribe((response: any) => {
      this.subjectdata = response.data.subjects;
    }, (error) => {
      console.log(error);
    });
  }

  getStudent() {
    this.attendenceService.getStudentList(this.clsId).subscribe((response: any) => {
      this.dataSource.data = response.data.students.data;
      this.pageData = {
        per_page: response.data.students.per_page,
        current_page: response.data.students.current_page - 1,
        total: response.data.students.total,
      };
      console.log(this.pageData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }

  markAbsent() {
    let data = {
      "student_ids": this.selection.selected,
      "class_id": this.clsId,
      "subject_id": this.subId || "",
      "date": this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    }

    this.attendenceService.updateAttendence(data).subscribe((response: any) => {
      // clear the selected students
      this.selection.clear();

      // redirect the teacher to attendance listing page (add krna pdega vo)

      console.log(response);
    }, (error) => {
      // console.log(error);
    });
  }

  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getStudent();
  }
}
