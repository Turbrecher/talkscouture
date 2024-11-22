import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginDialogComponent } from "../../../public/components/login-dialog/login-dialog.component";
import { RegisterDialogComponent } from '../../../public/components/register-dialog/register-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../../public/services/authentication.service';
import { Observable, of } from 'rxjs';

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

  @ViewChild(LoginDialogComponent) loginDialog!: LoginDialogComponent;//LoginBox modal
  @ViewChild(RegisterDialogComponent) registerDialog!: RegisterDialogComponent;//RegisterBox modal

  constructor(private cookieService: CookieService, private authenticationService: AuthenticationService, private router: Router) {

  }

  //Function that opens the login dialog box (which is a child of this component)
  openLoginDialog() {
    this.loginDialog.openDialog()
  }

  //Function that opens the register dialog box (which is a child of this component)
  openRegisterDialog() {
    this.registerDialog.openDialog()
  }




  ngOnInit() {
    //Check authentication.
    if (this.cookieService.get("token")) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }


    if (!this.isAuthenticated) {
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
          this.deleteToken("a").subscribe(() => {
            location.reload()
          })

        }
      }
    )


  }



  //Function that deletes auth token and returns an observable.
  deleteToken(token: string) {
    this.cookieService.set('token', "", -1000);

    return of(token);
  }




  //Function that log outs the current user
  logout() {

    this.authenticationService.logout().subscribe({
      next: async (response) => {
        this.deleteToken("a").subscribe({
          next: () => {
            this.ngOnInit()
            this.router.navigate(['inicio'])
          }
        })


      },
      error: (err) => { alert(err.message) },
    })
  }

}
