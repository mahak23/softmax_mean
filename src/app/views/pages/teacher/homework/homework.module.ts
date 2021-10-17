import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkService } from './homework.service';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HomeworkListingComponent } from './homework-listing/homework-listing.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';



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
  ],
  exports: [HomeworkListingComponent, HomeworkCreateComponent],
  providers: [HomeworkService]
})
export class HomeworkModule { }
