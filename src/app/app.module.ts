import { CoursesServcie } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesServcie],
  bootstrap: [AppComponent]
})
export class AppModule { }
