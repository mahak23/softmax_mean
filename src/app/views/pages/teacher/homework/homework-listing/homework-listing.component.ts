import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { HomeworkService } from '../homework.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { VideoModalComponent } from '../../video-modal/video-modal.component';
@Component({
  selector: 'kt-homework-listing',
  templateUrl: './homework-listing.component.html',
  styleUrls: ['./homework-listing.component.scss']
})
export class HomeworkListingComponent implements OnInit {

  constructor(public dialog: MatDialog, private homeworkService: HomeworkService, private router: Router) { }
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = [
    'sr_no', 'title', 'homework', 'class', 'youtube_id', 'created_at', 'action'
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
    this.getHomeworks(1);
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '800px',
      height: '550px',
      data: { youtube_id: data.youtube_id, is_youtube: true },
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  getHomeworks(page = 1) {
    this.homeworkService.getHomework(page).subscribe((response: any) => {
      this.dataSource.data = response.data.homeworks.data;
      this.pageData = {
        per_page: response.data.homeworks.per_page,
        current_page: response.data.homeworks.current_page - 1,
        total: response.data.homeworks.total,
      };
      console.log(this.pageData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }

  editHomework(homeworkId) {
    console.log(homeworkId)
    this.router.navigate(['/teacher/homeworks/edit/', homeworkId]);
  }



  deleteHomework(homeworkId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this homework!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {
        if (willDelete.value) {
          this.homeworkService.deleteHomework(homeworkId).subscribe((response: any) => {
            swal("Successfully deleted!");
            this.getHomeworks(1);
          }, (error) => {
            console.log(error);
          });
        }
      });
  }

  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getHomeworks(page);
  }

  showFileInfo(file) {
    let extension = file.system_name.split(".");
    extension = extension[1];
    extension = "jpg";
    return "/assets/media/files/" + extension + ".svg";
  }

  previewFile(file) {
    console.log(file, "cfghjk")
    //window.open(file.file_url, "_blank");
  }
}
