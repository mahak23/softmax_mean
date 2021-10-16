import { NgModule } from '@angular/core';
import { NoticeComponent } from './notice/notice.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    {
        path: 'notice',
        component: NoticeComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
