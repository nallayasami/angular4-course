import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class StringValidators {
    static containWhiteSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (<string>control.value).indexOf(' ') >= 0) {
            return { 'containWhiteSpace': true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'NKA') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
