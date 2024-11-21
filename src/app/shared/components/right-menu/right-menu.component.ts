import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginDialogComponent } from "../../../public/components/login-dialog/login-dialog.component";
import { RegisterDialogComponent } from '../../../public/components/register-dialog/register-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../../public/services/authentication.service';

@Component({
  selector: 'app-right-menu',
  standalone: true,
  imports: [RouterLink, LoginDialogComponent, RegisterDialogComponent],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.sass'
})
export class RightMenuComponent {
  public isAuthenticated: boolean = false
  public isWriter: boolean = false
  public isAdmin: boolean = false
  @ViewChild(LoginDialogComponent) loginDialog!: LoginDialogComponent;
  @ViewChild(RegisterDialogComponent) registerDialog!: RegisterDialogComponent;

  openLoginDialog() {
    this.loginDialog.openDialog()
  }

  openRegisterDialog() {
    this.registerDialog.openDialog()
  }

  constructor(private cookieService: CookieService, private authenticationService: AuthenticationService, private router: Router) {

  }


  ngOnInit() {
    //Check authentication.
    if (this.cookieService.get("token")) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }


    if(!this.isAuthenticated){
      return
    }

    //Check roles
    this.authenticationService.getRole(this.cookieService.get("token")).subscribe(
      {
        next: (response) => {
          if (response.role == "writer") {
            this.isWriter = true;
          } else {
            this.isWriter = false;
          }

          if (response.role == "admin") {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }

        },
        error: (err) => {
          this.cookieService.set('token',"",-1000)
          this.ngOnInit()
        }
      }
    )


  }


  logout() {


    this.authenticationService.logout().subscribe({
      next: (response) => {
        this.cookieService.set("token", "", -1000);
        this.ngOnInit();
        this.router.navigate(['inicio'])

      },
      error: (err) => { alert(err.message) },
    })
  }

}
