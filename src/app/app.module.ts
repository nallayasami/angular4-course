import { ServiceStatusService } from './common/service/service-status.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CoursesServcie } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GrowlModule, ProgressBarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CustomPipe } from './custom.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { ContentComponent } from './content/content.component';
import { BindingComponent } from './binding/binding.component';
import { ShowOrHideComponent } from './show-or-hide/show-or-hide.component';
import { InterationComponent } from './interation/interation.component';
import { SwichOptionsComponent } from './swich-options/swich-options.component';
import { StyleAndClassComponent } from './style-and-class/style-and-class.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { CamelCaseSplitPipe } from './camel-case-split.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveArrayComponent } from './reactive-array/reactive-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { AppErrorHandler } from './common/error/app-error-handler';
import { UserComponent } from './user/user.component';
import { TestComponent } from './comp/test/test.component';
import { ErrorComponent } from './common/error/error.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './common/service/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProgressSpinnerModule } from 'primeng/primeng';
import { CustomInterceptor } from './common/interceptor/customInterceptor';
import { MessageServiceService } from './common/service/message-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CoursesComponent,
    CourseComponent,
    CustomPipe,
    FavoriteComponent,
    LikeComponent,
    ContentComponent,
    BindingComponent,
    ShowOrHideComponent,
    InterationComponent,
    SwichOptionsComponent,
    StyleAndClassComponent,
    SafeTraversalComponent,
    InputFormatDirective,
    CustomDirectiveComponent,
    NavbarComponent,
    PipeComponent,
    TemplateDrivenFormComponent,
    CamelCaseSplitPipe,
    ReactiveFormComponent,
    SignupFormComponent,
    ReactiveArrayComponent,
    FormBuilderComponent,
    PostsComponent,
    UserComponent,
    TestComponent,
    ErrorComponent,
    FormGroupComponent,
    NotFoundComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    GrowlModule,
    ProgressBarModule,
    RouterModule.forRoot([
      {
        pathMatch: 'full',
        path: 'component',
        component: CourseComponent
      },
      {
        pathMatch: 'full',
        path: 'posts',
        component: PostsComponent
      },
      {
        pathMatch: 'full',
        path: 'user',
        component: UserComponent
      },
      {
        pathMatch: 'full',
        path: 'user/:userId',
        component: UserDetailsComponent
      },
      {
        pathMatch: 'full',
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    CoursesServcie,
    PostsService,
    UserService,
    MessageService,
    ServiceStatusService,
    MessageServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
