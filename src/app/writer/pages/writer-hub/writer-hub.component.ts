import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-writer-hub',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './writer-hub.component.html',
  styleUrl: './writer-hub.component.sass'
})
export class WriterHubComponent {

  ngOnInit(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
