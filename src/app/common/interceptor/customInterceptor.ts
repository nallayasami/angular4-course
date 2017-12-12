import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { ServiceStatusService } from '../service/service-status.service';


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('test');
        const serviceStatus: ServiceStatusService = this.injector.get(ServiceStatusService);
        return next.handle(req)
            .do((request: HttpEvent<any>) => {
                console.log('Begins', req.url);
                serviceStatus.changeState(true);
            })
            .finally(() => {
                serviceStatus.changeState(false);
                console.log('Ends');
            });
    }
}
