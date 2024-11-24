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
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "signature": ["", []],
    "password": ["", []],

  });


  private id: string = "0"
  private file: any = " "

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })


    //gets profile info
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


  //Function that edits the user's profile
  editProfile($event: Event) {
    $event.preventDefault()

    let user = new FormData()
    user.append('id',this.id)
    user.append('name',this.name.value)
    user.append('surname',this.surname.value)
    user.append('username',this.username.value)
    user.append('email',this.email.value)

    //Only add password if user has written it.
    if(this.password.value != ""){
      user.append('password',this.password.value)
    }

    //Only add signature file if the user has added it
    if(this.file != " "){
      user.append('signature', this.file, this.file.name)
    }



    //Edits the user
    this.authenticationService.editUser(
      user
    ).subscribe({
      next: (response) => {
        this.ngOnInit()
      },
      error: (err) => {

      },
    })
  }


  //getters
  getFile(event: any) {
    this.file = event.target.files[0]
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

  get signature() {
    return this.profileForm.get("signature") as FormControl
  }
}
