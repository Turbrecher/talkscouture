import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RightMenuComponent } from "../right-menu/right-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, RightMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
