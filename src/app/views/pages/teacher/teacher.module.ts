import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { NoticeModule } from './notice/notice.module';
import { HomeworkModule } from './homework/homework.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    TeacherRoutingModule,
    // MatTableModule,
    // MatTooltipModule,
    // MatIconModule,
    // MatButtonModule,
    // MatPaginatorModule,
    NoticeModule,
    HomeworkModule,
  ]
})
export class TeacherModule { }
