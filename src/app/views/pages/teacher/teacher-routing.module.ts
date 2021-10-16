import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeListingComponent } from './notice/notice-listing/notice.component';

const routes: Routes = [

    {
        path: 'notice',
        component: NoticeListingComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
