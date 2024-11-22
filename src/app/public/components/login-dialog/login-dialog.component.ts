import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RightMenuComponent } from '../../../shared/components/right-menu/right-menu.component';
import { of } from 'rxjs';

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


  //Functions that opens the dialog box.
  openDialog() {
    this.dialog.nativeElement.showModal()
  }

  //Functions that closes the dialog box.
  closeDialog() {
    this.dialog.nativeElement.close()
  }


  //Function that creates the auth token. (It uses an observable in order to navigate right after the cookie is set)
  addToken(token: string) {
    this.cookieService.set("token", token)

    return of(token)
  }


  //Function that logs in an user.
  login($event: Event) {
    $event.preventDefault()

    const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

    this.authenticationService.login(this.email.value, this.password.value).subscribe({
      next: async (response) => {
        this.addToken(response.token).subscribe({
          next: () => {
            this.router.navigate(['inicio'])
            location.reload()
          }
        })



      },
      error: (err) => {
        console.log(err)
      },
    })

  }



  //getters
  get email() {
    return this.loginForm.get("email") as FormControl
  }

  get password() {
    return this.loginForm.get("password") as FormControl
  }
}
