import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeTransition } from './shared/route-transition';
import { fadeInScaleAnimation } from './shared/fade-in-scale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    //routeTransition,
    fadeInScaleAnimation
  ]
})
export class AppComponent {
  title = 'talkscouture';

  constructor(protected route: ActivatedRoute) {
  }

  getRouteAnimationData() {
    return this.route?.snapshot?.data;
  }
}
