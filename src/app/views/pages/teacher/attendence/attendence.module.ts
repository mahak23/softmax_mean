import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [AttendenceListComponent],
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
    MatSelectModule
  ]
})
export class AttendenceModule { }
