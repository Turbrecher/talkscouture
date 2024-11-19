import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RightMenuComponent } from '../../../shared/components/right-menu/right-menu.component';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.sass'
})
export class LoginDialogComponent {

  @ViewChild('dialog') dialog!: ElementRef;

  loginForm: FormGroup = this.fb.group({
    "email": ["", Validators.required],
    "password": ["", Validators.required],

  });

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
  }


  openDialog() {
    this.dialog.nativeElement.showModal()
  }

  closeDialog() {
    this.dialog.nativeElement.close()
  }


  login($event: Event) {
    $event.preventDefault()

    this.authenticationService.login(this.email.value, this.password.value).subscribe({
      next: (response) => {
        this.cookieService.set("token", response.token)
        location.reload()
      },
      error: (err) => {
        console.log(err)
      },
    })

  }



  get email() {
    return this.loginForm.get("email") as FormControl
  }

  get password() {
    return this.loginForm.get("password") as FormControl
  }
}
