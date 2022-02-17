import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
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
      console.log(this.clsdata, "cls data");
    }, (error) => {
      console.log(error);
    });
  }

  changeClass(cls) {
    if (cls) {
      this.clsId = cls
      this.getSubjectList(cls)
    }
  }

  changesubject(subject) {
    if (subject) {
      this.subId = subject
      this.getStudent()
    }
  }
  getSubjectList(cls) {

    this.attendenceService.getSubjectList(cls).subscribe((response: any) => {
      this.subjectdata = response.data.subjects;
      console.log(this.subjectdata, "subjectdata data");
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

  markAbsent(element) {
    let data = {
      "student_ids": [1, 3],
      "class_id": this.clsId,
      "subject_id": this.subId,
      "date": this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    }
    this.attendenceService.updateAttendence(data).subscribe((response: any) => {
      this.getStudent();
    }, (error) => {
      console.log(error);
    });
  }

  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getStudent();
  }
}
