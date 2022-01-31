import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElearningListComponent } from './elearning-list/elearning-list.component';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ElearningListComponent],
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
  ]
})
export class ElearningModule { }
