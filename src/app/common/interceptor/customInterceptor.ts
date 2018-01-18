import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { ServiceStatusService } from '../service/service-status.service';
import { count } from 'rxjs/operators/count';


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    count: number = 0;

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const serviceStatus: ServiceStatusService = this.injector.get(ServiceStatusService);
        return next.handle(req)
            .do((request: HttpEvent<any>) => {
                // console.log('Begins', req.url);
                if (request.type === 0) {
                    this.count++;
                }
                serviceStatus.changeState(true);
                // console.log('do', this.count);
            })
            .finally(() => {
                this.count--;
                if (this.count === 0) {
                    serviceStatus.changeState(false);
                }
                // console.log('finally', this.count);
                // console.log('Ends');
            });
    }
}
