import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public getUserData: any = ""
  public defaultImg = "/assets/media/users/default.jpg"
  constructor() { }

  ngOnInit() {
    this.getUserData = JSON.parse(localStorage.getItem('user'));
    console.log(this.getUserData)
  }

}
