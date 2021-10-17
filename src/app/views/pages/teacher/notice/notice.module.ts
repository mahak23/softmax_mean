import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeCreateComponent } from './notice-create/notice-create.component';
import { NoticeListingComponent } from './notice-listing/notice.component';
import { NoticeService } from './notice.service';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NoticeCreateComponent, NoticeListingComponent],
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
  ],
  exports: [NoticeCreateComponent, NoticeListingComponent],
  providers: [NoticeService]
})
export class NoticeModule { }
