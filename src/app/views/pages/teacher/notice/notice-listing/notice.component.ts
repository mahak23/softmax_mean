import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NoticeService } from '../notice.service';
import swal from 'sweetalert2';
@Component({
  selector: 'kt-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeListingComponent implements OnInit {

  constructor(private noticeService: NoticeService) { }
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = ['sr_no', 'notice', 'created_at', 'action'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getNotices();
  }

  getNotices() {
    this.noticeService.getNotices().subscribe((response: any) => {
      console.log("Here", response.data.notices.data);
      this.dataSource.data = response.data.notices.data;
    }, (error) => {
      console.log(error);
    });
  }

  editNotice(noticeId) {
    console.log(noticeId)
  }

  deleteNotice(noticeId) {
    console.log(noticeId)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this notice!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

        if(willDelete.value){
             swal("Success");
        }else{
          swal("Fail");
        }

      console.log(willDelete)
    });
    
  }

}
