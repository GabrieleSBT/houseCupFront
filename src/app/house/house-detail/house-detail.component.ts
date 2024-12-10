import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoreComponent } from '../score/score.component';
import { HouseDto } from '../../model/house-dto';
import { ScoreService } from '../../model/score-service';

@Component({
  selector: 'app-house-detail',
  imports: [RouterModule],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent{
  houseDetails!: HouseDto[];

  
  @Input({
    required:true
  })
  detail:HouseDto | null = null;


}