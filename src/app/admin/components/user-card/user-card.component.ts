import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.sass'
})
export class UserCardComponent {

  //All inputs the user card can receive.
  @Input() id: string = "1"
  @Input() photo: string = "usuario.png"
  @Input() name: string = "Nombre"
  @Input() surname: string = "Apellido/s"
  @Input() username: string = "Username"
  @Input() email: string = "Email"
}
