import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }
    handleError(error) {
        const service = this.injector.get(MessageService) as MessageService;
        const router = this.injector.get(Router);
        console.log('NKA', error);
        //  router.navigate(['/user']);
        service.add({ severity: 'error', summary: 'Internal Error', detail: 'Please try again later' });
    }
}
