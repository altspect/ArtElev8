import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SignInComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('given form', () => {
    it('when email is empty, then recover password button should be disabled', () => {
      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it('when email is invalid, then recover password button should be disabled', () => {
      setEmail('invalidEmail');

      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it('when email is valid, then recover password button should be enabled', () => {
      setEmail('valid@email.com');

      expect(recoverPasswordButton().disabled).toBeFalsy();
    });

    it('when email is empty, then login button should be disabled', () => {
      setEmail('');
      setPassword('anyPassws');

      expect(loginButton().disabled).toBeTruthy();
    });

    it('when password is not empty, then login button should be enabled', () => {
      setEmail('valid@email.com');
      setPassword('anypassword');

      expect(loginButton().disabled).toBeFalsy();
    });
  })

  function setEmail(value: string) {
    component.form.get('email')?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get('password')?.setValue(value);
    fixture.detectChanges();
  }

  function recoverPasswordButton() {
    return page.querySelector('[test-id="recover-password-button"]')
  }

  function loginButton() {
    return page.querySelector('[test-id="login-button"]')
  }
});