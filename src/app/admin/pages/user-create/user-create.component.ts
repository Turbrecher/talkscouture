import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../public/services/authentication.service';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { UserAdminService } from '../../services/user-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionSelectComponent } from '../../../shared/components/formComponents/section-select/section-select.component';
import { RoleSelectComponent } from '../../../shared/components/role-select/role-select.component';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule, RoleSelectComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.sass'
})
export class UserCreateComponent {

  userForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["", []],
    "role": ["", [Validators.required]],

  });


  private id: string = "0"

  constructor(private fb: FormBuilder, private userAdminService: UserAdminService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

  }


  //Function that creates an user
  createUser($event: Event) {
    $event.preventDefault()

    let user = {
      name: this.name.value,
      surname: this.surname.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      role: this.role.value
    }


    this.userAdminService.createUser(user).subscribe({
      next: (response) => {

        this.router.navigate(['/admin/users/list'])
      },
      error: (err) => {

      },
    })
  }



  //getters
  get email() {
    return this.userForm.get("email") as FormControl
  }

  get password() {
    return this.userForm.get("password") as FormControl
  }

  get name() {
    return this.userForm.get("name") as FormControl
  }

  get surname() {
    return this.userForm.get("surname") as FormControl
  }

  get username() {
    return this.userForm.get("username") as FormControl
  }

  get role() {
    return this.userForm.get("role") as FormControl
  }

}
