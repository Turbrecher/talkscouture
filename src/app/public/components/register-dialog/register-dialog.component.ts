import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';
import { InputComponent } from '../../../shared/components/formComponents/input/input.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.sass'
})
export class RegisterDialogComponent {

  @ViewChild('dialog') dialog!: ElementRef;

  registerForm: FormGroup = this.fb.group({
    "email": ["", Validators.required],
    "password": ["", Validators.required],

  });

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {

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

  //Function that registers an user
  register($event: Event) {
    $event.preventDefault()

    let user = {
      email: this.email.value,
      password: this.password.value,
    }

    this.authenticationService.register(user).subscribe({
      next: (response) => {
        this.closeDialog()
      },
      error: (err) => {
        
      },
    })
  }



  //getters
  get email() {
    return this.registerForm.get("email") as FormControl
  }

  get password() {
    return this.registerForm.get("password") as FormControl
  }

}
