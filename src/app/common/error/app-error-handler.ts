import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('Un expected error occured');
        console.log('NKA', error);
    }
}
