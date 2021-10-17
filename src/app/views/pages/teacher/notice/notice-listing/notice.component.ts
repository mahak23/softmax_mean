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
  displayedColumns: string[] = [
    'sr_no', 'notice', 'created_at', 'added_by','is_shown', 'action'
  ];
  pageData = {
    current_page: 1,
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
    this.getNotices();
  }

  getNotices() {
    this.noticeService.getNotices().subscribe((response: any) => {
      this.dataSource.data = response.data.notices.data;
      this.pageData = {
        per_page: response.data.notices.per_page,
        current_page: response.data.notices.current_page,
        total: response.data.notices.total,
      };

      console.log(this.pageData, "Page data");

    }, (error) => {
      console.log(error);
    });
  }

  editNotice(noticeId) {
    console.log(noticeId)
  }

  deleteNotice(noticeId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this notice!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

        if(willDelete.value){
          this.noticeService.deleteNotice(noticeId).subscribe((response: any) => {
            swal("Successfully deleted!");
            this.getNotices()
      
          }, (error) => {
            console.log(error);
          });
            
        }else{
          swal("Fail,Try again!");
        }

    
    });
    
  }

  onPageChange(event) {
    console.log(event, "Eve");
  }
}
