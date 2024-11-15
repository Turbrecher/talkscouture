import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.sass'
})
export class LoginDialogComponent {

  @ViewChild('dialog') dialog!: ElementRef;

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
    console.log("Iniciando sesion")
  }
}
