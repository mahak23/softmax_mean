import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ElearningService } from '../elearning.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-elearning-list',
  templateUrl: './elearning-list.component.html',
  styleUrls: ['./elearning-list.component.scss']
})
export class ElearningListComponent implements OnInit {

  constructor(private elearningService: ElearningService, private router: Router) { }
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = [
    'sr_no', 'title', 'subject', 'class', 'play', 'action'
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
    this.getElearnings(1);
  }

  getElearnings(page = 1) {
    this.elearningService.getElearningList(page).subscribe((response: any) => {
      this.dataSource.data = response.data.e_learnings.data;
      this.pageData = {
        per_page: response.data.e_learnings.per_page,
        current_page: response.data.e_learnings.current_page - 1,
        total: response.data.e_learnings.total,
      };
      console.log(this.pageData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }



  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getElearnings(page);
  }




}
