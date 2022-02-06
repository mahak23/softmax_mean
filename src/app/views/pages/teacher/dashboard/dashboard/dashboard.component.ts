import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public homeworkTotal = 0;
  public noticeTotal = 0
  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getStats();

  }
  getStats() {
    this.dashboardService.getStats().subscribe((response: any) => {
      this.homeworkTotal = response.data.homeworks;
      this.noticeTotal = response.data.notices;
    }, (error) => {
      console.log(error);
    });
  }



  redirectToList(param) {
    // console.log(param, "cfghj")
    this.router.navigate(['/teacher/' + param]);
  }

}
