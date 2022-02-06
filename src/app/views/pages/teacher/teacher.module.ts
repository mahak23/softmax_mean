import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { NoticeModule } from './notice/notice.module';
import { HomeworkModule } from './homework/homework.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileComponent } from './profile/profile.component';
import { ElearningModule } from './elearning/elearning.module';
import { AttendenceModule } from './attendence/attendence.module';
import { VideoModalComponent } from './video-modal/video-modal.component';
@NgModule({
  declarations: [ProfileComponent, VideoModalComponent],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    TeacherRoutingModule,
    NoticeModule,
    HomeworkModule,
    DashboardModule,
    ElearningModule,
    AttendenceModule
  ],
  entryComponents: [VideoModalComponent],
  exports: [VideoModalComponent]
})
export class TeacherModule { }
