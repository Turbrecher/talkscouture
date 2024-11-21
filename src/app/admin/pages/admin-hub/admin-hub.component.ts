import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-hub',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-hub.component.html',
  styleUrl: './admin-hub.component.sass'
})
export class AdminHubComponent {

  ngOnInit(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
