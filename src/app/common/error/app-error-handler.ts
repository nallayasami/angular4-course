import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { MessageServiceService } from '../service/message-service.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }
    handleError(error) {
        const service = this.injector.get(MessageServiceService) as MessageServiceService;
        const router = this.injector.get(Router);
        console.log('NKA', error);
        //  router.navigate(['/user']);
        //  router.navigate(['/user'], {queryParams:{key:value}});
        service.addMessage({ severity: 'error', summary: 'Internal Error', detail: 'Please try again later' });
    }
}
