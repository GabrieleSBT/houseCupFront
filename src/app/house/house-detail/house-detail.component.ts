import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoreComponent } from '../score/score.component';
import { ScoreDetail } from '../../model/score-detail';

@Component({
  selector: 'app-house-detail',
  imports: [RouterModule],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent {

  @Input({
    required:true
  })
  detail:ScoreDetail | null = null;


}