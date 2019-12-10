import { TextAreaComponent } from './component/text-area/text-area.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { RedirectComponent } from './redirect/redirect.component';
import { CoursesComponent } from './courses/courses.component';
import { ReusableComponent } from './component/reusable/reusable.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { UtilsComponent } from './component/utils/utils.component';
import { Component } from '@angular/core';
import { PrimeDeferComponent } from './prime-defer/prime-defer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CourseComponent } from './course/course.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { SearchComponent } from './search/search.component';
import { PrimeDialogComponent } from './prime-dialog/prime-dialog.component';
import { SlotManagerComponent } from './slot-manager/slot-manager.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'redirect',
        pathMatch: 'full',
        component: RedirectComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'Binding',
        component: CoursesComponent
    },
    {
        path: 'Pipes',
        component: PipeComponent
    },
    {
        path: 'ReusableComponent',
        component: ReusableComponent
    },
    {
        path: 'Directives',
        component: DirectivesComponent
    },
    {
        path: 'Utils',
        component: UtilsComponent
    },
    {
        path: 'TemplateDrivenForms',
        component: TemplateDrivenFormComponent
    },
    {
        path: 'ReactiveFroms',
        component: ReactiveFormsComponent
    },
    {
        path: 'HttpServices',
        component: PostsComponent,
    },
    {
        path: 'WordCounter',
        component: TextAreaComponent,
    },
    {
        path: 'RoutingAndNavigation',
        component: CourseComponent,
        children: [
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'user/:userId',
                component: UserDetailsComponent
            }
        ]
    },
    {
        path: 'LazyLoading',
        component: PrimeDeferComponent
    },
    {
        path: 'SearchComponent',
        component: SearchComponent
    },
    {
        path: 'DialogComponent',
        component: PrimeDialogComponent
    },
    {
        path: 'SlotManager',
        component: SlotManagerComponent
    },
    {
        path: 'TicketBooking',
        component: TicketBookingComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
