import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NoticeComponent } from './notice/notice.component';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  declarations: [NoticeComponent],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
