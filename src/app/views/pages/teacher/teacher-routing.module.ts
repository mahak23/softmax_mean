import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceListComponent } from './attendence/attendence-list/attendence-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ElearningListComponent } from './elearning/elearning-list/elearning-list.component';
import { HomeworkCreateComponent } from './homework/homework-create/homework-create.component';
import { HomeworkListingComponent } from './homework/homework-listing/homework-listing.component';
import { NoticeCreateComponent } from './notice/notice-create/notice-create.component';
import { NoticeListingComponent } from './notice/notice-listing/notice.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'notices',
        component: NoticeListingComponent,
    },
    {
        path: 'notices/create',
        component: NoticeCreateComponent,
    },
    {
        path: 'notices/edit/:id',
        component: NoticeCreateComponent,
    },
    {
        path: 'homeworks',
        component: HomeworkListingComponent
    },
    {
        path: 'homeworks/create',
        component: HomeworkCreateComponent,
    },
    {
        path: 'homeworks/edit/:id',
        component: HomeworkCreateComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: 'elearning',
        component: ElearningListComponent,
    },
    {
        path: 'attendence',
        component: AttendenceListComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
