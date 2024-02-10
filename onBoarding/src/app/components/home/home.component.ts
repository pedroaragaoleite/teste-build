import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../../interfaces/i-step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  phrases: IStep[] = [];

  constructor(stepsService: StepsService) {
    this.phrases = stepsService.phrases;
  }


}
