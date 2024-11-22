import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAdminService } from '../../services/user-admin.service';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { NgxEditorModule } from 'ngx-editor';
import { RoleSelectComponent } from '../../../shared/components/role-select/role-select.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule, NgxEditorModule, RoleSelectComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.sass'
})
export class UserEditComponent {

  userForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["", []],
    "role": ["required"]

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

    this.id = this.activatedRoute.snapshot.params['id']


    this.userAdminService.getUser(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        this.name.setValue(response.user.name)
        this.surname.setValue(response.user.surname)
        this.username.setValue(response.user.username)
        this.email.setValue(response.user.email)
        this.role.setValue(response.role.name)
      },
      error: (err) => {

      }
    })

  }

  editUser($event: Event) {
    $event.preventDefault()

    let user = {
      name: this.name.value,
      surname: this.surname.value,
      username: this.username.value,
      email: this.email.value,
      role: this.role.value
    }

    this.userAdminService.editUser(user, this.id).subscribe({
      next: (response) => {

        this.router.navigate(['/admin/users/list'])
      },
      error: (err) => {

      },
    })
  }


  deleteUser(event: Event) {
    event.preventDefault()


    if (confirm("¿Estás seguro/a?")) {

      this.userAdminService.deleteUser(this.id).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/users/list'])
        },
        error: (err) => {

        }
      })

    }
  }





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
