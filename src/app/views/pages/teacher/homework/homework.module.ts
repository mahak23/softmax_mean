import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeworkService } from './homework.service';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HomeworkListingComponent } from './homework-listing/homework-listing.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoModalComponent } from '../video-modal/video-modal.component';


@NgModule({
  declarations: [HomeworkListingComponent, HomeworkCreateComponent],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFileUploadModule,
    MatDialogModule,
  ],
  exports: [HomeworkListingComponent, HomeworkCreateComponent,],
  providers: [HomeworkService, DatePipe]
})
export class HomeworkModule { }
