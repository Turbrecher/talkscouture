import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { fadeInScaleAnimation } from './shared/fade-in-scale';
import { NavComponent } from "./shared/components/nav/nav.component";
import { RightMenuComponent } from "./shared/components/right-menu/right-menu.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    //routeTransition,
    fadeInScaleAnimation
  ]
})
export class AppComponent {

  constructor(protected route: ActivatedRoute, protected router:Router) {
  }

  ngOnInit(){
    //this.router.navigate(['inicio'])
  }

  getRouteAnimationData() {
    return this.route?.snapshot?.data;
  }
}
