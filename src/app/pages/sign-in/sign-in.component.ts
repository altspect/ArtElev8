import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  form!: FormGroup;
  emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
  passwordControl = this.formBuilder.control('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl
    });
  }
}
 