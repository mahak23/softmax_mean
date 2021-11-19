import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkService } from './homework.service';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HomeworkListingComponent } from './homework-listing/homework-listing.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    MatFileUploadModule
  ],
  exports: [HomeworkListingComponent, HomeworkCreateComponent],
  providers: [HomeworkService]
})
export class HomeworkModule { }
