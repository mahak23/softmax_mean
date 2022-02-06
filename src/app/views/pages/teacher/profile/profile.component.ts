import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'kt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public getUserData: any
  public defaultImg = "/assets/media/users/default.jpg"
  constructor(private profileService: ProfileService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe((response: any) => {
      this.getUserData = response.data.user;
      this.changeDetectorRef.detectChanges();

      console.log(this.getUserData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }

}
