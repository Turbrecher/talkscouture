import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() buttonValue: string = "Press me!"
  @Input() extraClass: string = ""
  @Input() valid: boolean = true
}
