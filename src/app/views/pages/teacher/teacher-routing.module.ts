import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeCreateComponent } from './notice/notice-create/notice-create.component';
import { NoticeListingComponent } from './notice/notice-listing/notice.component';

const routes: Routes = [
    {
        path: 'notices',
        component: NoticeListingComponent,
    },
    {
        path: 'notices/create',
        component: NoticeCreateComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
