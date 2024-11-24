import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('menu') menu!: ElementRef


  toggleMenu($event: Event) {

    if (this.menu.nativeElement.className == "hiddenMenu") {
      this.menu.nativeElement.className = "shownMenu"

    } else if (this.menu.nativeElement.className == "shownMenu") {
      this.menu.nativeElement.className = "hiddenMenu"

    }
  }

}
