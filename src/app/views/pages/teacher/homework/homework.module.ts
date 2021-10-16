import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkListingComponent } from './homework-listing/homework-listing.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';



@NgModule({
  declarations: [HomeworkListingComponent, HomeworkCreateComponent],
  imports: [
    CommonModule
  ]
})
export class HomeworkModule { }
