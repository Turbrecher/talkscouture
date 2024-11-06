import { animate, group, query, style, transition, trigger } from '@angular/animations';


//Fade-in scale
export const fadeInScaleAnimation = trigger('routeTransition', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ], { optional: true }),
      group([
        query(':leave', [
          animate('1s ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in', style({ opacity: 1 }))
        ], { optional: true }),
      ]),
    ]),
  ]);