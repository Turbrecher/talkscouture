import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent {
  private interval: any

  ngOnInit() {

    //this.interval = this.autoSlide()
  }

  ngOnDestroy() {
    //clearInterval(this.interval)
  }

  constructor() {
  }


  slideRight(){
      document.getElementsByClassName("images")[0].scrollBy({
        top:0,
        left:515,
        behavior:"smooth"
      })
  }

  slideLeft(){
    document.getElementsByClassName("images")[0].scrollBy({
      top:0,
      left:-515,
      behavior:"smooth"
    })
}


  autoFade() {

    return setInterval(() => {

      let img1 = document!.getElementById("img1") as HTMLElement
      let img2 = document!.getElementById("img2") as HTMLElement
      let img3 = document!.getElementById("img3") as HTMLElement

      //De imagen 1 a imagen 2
      if (img1.className == "img1 active") {
        img1.className = "img1"
        img2.className = "img2 active"
        return
      }

      //De imagen 2 a imagen 3
      if (img2.className == "img2 active") {
        img2.className = "img2"
        img3.className = "img3 active"
        return
      }

      //De imagen 3 a imagen 1
      if (img3.className == "img3 active") {
        img3.className = "img3"
        img1.className = "img1 active"
        return
      }



    }, 3000)

  }
}
