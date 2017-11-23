import { Injectable } from '@angular/core';

@Injectable()
export class CoursesServcie{
    getCourses():Array<String>{
        return ["Course 1", "Course 2", "Course 3"];   
    }
}