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

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    TeacherRoutingModule,
    NoticeModule,
    HomeworkModule,
    DashboardModule
  ]
})
export class TeacherModule { }
