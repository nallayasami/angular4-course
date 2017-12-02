import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StringValidators } from '../common/validators/string.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  fg = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-z|A-Z]+')], StringValidators.shouldBeUnique),
    password: new FormControl('', [Validators.required, Validators.minLength(8), StringValidators.containWhiteSpace])
  });

  isServerDown = false;

  onSubmit() {
    if (this.isServerDown) {
      this.fg.setErrors({ isServerDown: true });
    }
  }


  get userName() {
    return this.fg.get('userName');
  }
  get password() {
    return this.fg.get('password');
  }

}
