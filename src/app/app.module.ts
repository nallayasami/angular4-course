import { CoursesServcie } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesServcie],
  bootstrap: [AppComponent]
})
export class AppModule { }
