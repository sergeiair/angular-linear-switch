import { trigger, animate, transition, style, state } from '@angular/animations';

const itemWidth = 65;

const animations = trigger('animateCaret', [
  state('0' , style({ transform: `translateX(0)` })),
  state('1' , style({ transform: `translateX(${itemWidth}px)` })),
  state('2' , style({ transform: `translateX(${itemWidth * 2}px)` })),
  state('3' , style({ transform: `translateX(${itemWidth * 3}px)` })),
  transition('* <=> *', animate('300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
]);

export default animations;
