import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {

  profileForm: FormGroup = this.fb.group({
    "email": ["", Validators.required],
    "password": ["", Validators.required],
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],

  });


  private id: String = "0"

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })


    this.authenticationService.profile().subscribe({
      next: (response) => {
        this.name.setValue(response.user.name)
        this.surname.setValue(response.user.surname)
        this.username.setValue(response.user.username)
        this.email.setValue(response.user.email)
        this.password.setValue("")
        this.id = response.user.id
      },
      error: (err) => {

      }
    })

  }

  editProfile($event: Event) {
    $event.preventDefault()
    this.authenticationService.editUser(
      this.name.value,
      this.surname.value,
      this.username.value,
      this.email.value,
      this.password.value,
      this.id
    ).subscribe({
      next: (response) => {
        console.log(response)
        this.ngOnInit()
      },
      error: (err) => {

      },
    })
  }



  get email() {
    return this.profileForm.get("email") as FormControl
  }

  get password() {
    return this.profileForm.get("password") as FormControl
  }

  get name() {
    return this.profileForm.get("name") as FormControl
  }

  get surname() {
    return this.profileForm.get("surname") as FormControl
  }

  get username() {
    return this.profileForm.get("username") as FormControl
  }
}
