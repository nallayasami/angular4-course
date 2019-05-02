import { ConfirmMessageService } from './servcie/confirm-message.service';
import { GitService } from './common/service/git-service';
import { TemplateRef } from '@angular/core';
import { ServiceStatusService } from './common/service/service-status.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CoursesServcie } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  GrowlModule, ProgressBarModule, DeferModule, DataListModule, Header,
  Footer, FileUploadModule, DialogModule, ConfirmDialogModule, CalendarModule
} from 'primeng/primeng';

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
import { PrimeOrderListComponent } from './prime-order-list/prime-order-list.component';
import { OrderListModule } from 'primeng/primeng';
import { ScriptLoadingComponent } from './script-loading/script-loading.component';
import { PrimeDeferComponent } from './prime-defer/prime-defer.component';
import { PrimeDeferCompComponent } from './prime-defer-comp/prime-defer-comp.component';
import { CarService } from './prime-defer/car.service';
import { LazyLoadDirective } from './lazy-load.directive';
import { DomHandler } from 'primeng/components/dom/domhandler';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { UtilsComponent } from './component/utils/utils.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { ReusableComponent } from './component/reusable/reusable.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { SearchComponent } from './search/search.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { PaymentGetwayComponent } from './payment-getway/payment-getway.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PrimeDialogComponent } from './prime-dialog/prime-dialog.component';
import { RedirectComponent } from './redirect/redirect.component';
import { SlotManagerComponent } from './slot-manager/slot-manager.component';
import { TimerComponent } from './timer/timer.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { BuilingLayoutComponent } from './builing-layout/builing-layout.component';


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
    UserDetailsComponent,
    PrimeOrderListComponent,
    ScriptLoadingComponent,
    PrimeDeferComponent,
    PrimeDeferCompComponent,
    LazyLoadDirective,
    HomeComponent,
    ReactiveFormsComponent,
    UtilsComponent,
    DirectivesComponent,
    ReusableComponent,
    FileUploadComponent,
    CardComponentComponent,
    SearchComponent,
    GithubSearchComponent,
    GithubUserComponent,
    PaymentGetwayComponent,
    DialogComponent,
    PrimeDialogComponent,
    RedirectComponent,
    SlotManagerComponent,
    TimerComponent,
    TicketBookingComponent,
    BuilingLayoutComponent
    // Header,
    // Footer,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    GrowlModule,
    ProgressBarModule,
    OrderListModule,
    RouterModule.forRoot(APP_ROUTES),
    DeferModule,
    DataListModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule
  ],
  providers: [
    CoursesServcie,
    PostsService,
    UserService,
    MessageService,
    ServiceStatusService,
    MessageServiceService,
    CarService,
    DomHandler,
    GitService,
    ConfirmMessageService,
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
