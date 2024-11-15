import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginDialogComponent } from "../../../public/components/login-dialog/login-dialog.component";

@Component({
  selector: 'app-right-menu',
  standalone: true,
  imports: [RouterLink, LoginDialogComponent],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.sass'
})
export class RightMenuComponent {
  public isAuthenticated: boolean = false
  @ViewChild(LoginDialogComponent) dialog!: LoginDialogComponent;
  
  openLoginDialog() {
    this.dialog.openDialog()
  }
}
