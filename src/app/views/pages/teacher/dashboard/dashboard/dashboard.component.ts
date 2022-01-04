import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworkService } from '../../homework/homework.service';
import { NoticeService } from '../../notice/notice.service';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public homeworkTotal = 0;
  public noticeTotal = 0
  constructor(private noticeService: NoticeService, private router: Router, private homeworkService: HomeworkService) { }

  ngOnInit() {
    this.getHomeworks();
    this.getNotices(1);
  }
  getHomeworks(page = 1) {
    this.homeworkService.getHomework(page).subscribe((response: any) => {
      this.homeworkTotal = response.data.homeworks.total;
      console.log(this.homeworkTotal)
    }, (error) => {
      console.log(error);
    });
  }

  getNotices(page = 1) {
    this.noticeService.getNotices(page).subscribe((response: any) => {
      this.noticeTotal = response.data.notices.total;
      console.log(this.noticeTotal)
    }, (error) => {
      console.log(error);
    });
  }

  redirectToList(param) {
    // console.log(param, "cfghj")
    this.router.navigate(['/teacher/' + param]);
  }

}
