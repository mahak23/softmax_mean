import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeCreateComponent } from './notice-create/notice-create.component';
import { NoticeListingComponent } from './notice-listing/notice.component';
import { NoticeService } from './notice.service';
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

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
  ],
  exports: [NoticeCreateComponent, NoticeListingComponent],
  providers: [NoticeService]
})
export class NoticeModule { }
