import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';







@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('movingForward', [
      state('start', style({ transform: 'translateX(0)' })),
      state('end', style({ transform: 'translateX(300px)' })),
      transition('start => end', [
        animate('.6s')
      ]),
      transition('end => start', [
        animate('.6s')
      ])
    ]),
    trigger('movingBack', [
      state('start', style({ transform: 'translateX(0)' })),
      state('end', style({ transform: 'translateX(-300px)' })),
      transition('start => end', [
        animate('.6s')
      ]),
      transition('end => start', [
        animate('.6s')
      ])
    ]),
    trigger('fade', [
      state('start', style({ opacity: 1 })),
      state('end', style({ opacity: 0 })),
      transition('start => end', [
        animate('0.5s')
      ])
    ])
  ]
})
export class EscenaComponent {
  faArrowRight: any = faArrowRight;
  faArrowLeft: any = faArrowLeft;
  slide: number = 0;
  isMovingFront = true;
  isMovingBack = true;
  isFade = true;

  @Input() phrases!: IStep[];


  previousCard(): void {
    console.log("previous clicked");
    this.isMovingBack = !this.isMovingBack;
    this.isFade = !this.isFade;
    if (this.slide === 0) {
      this.slide++;
    } else {
      setTimeout(() => {
        this.slide--;
        this.isMovingBack = true;
        this.isFade = true;
      }, 1000)
    }
  }
  nextCard(): void {
    this.isMovingFront = !this.isMovingFront;
    this.isFade = !this.isFade;
    // console.log(this.moveLeft);    

    if (this.slide === 2) {
      this.slide--;
    } else {
      setTimeout(() => {
        this.slide++;
        this.isMovingFront = true;
        this.isFade = true;
      }, 1000)

      // console.log(this.moveLeft);

    }
  }
}
