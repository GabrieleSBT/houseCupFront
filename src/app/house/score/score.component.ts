import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseDetailComponent } from '../house-detail/house-detail.component';
import { ScoreDetail } from '../../model/score-detail';
import { ScoreService } from '../../model/score-service';

@Component({
  selector: 'app-score',
  imports: [RouterModule,HouseDetailComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
  scoreDetails!: ScoreDetail[];
  constructor(private scoreService: ScoreService){

  }
  ngOnInit(): void {
    this.scoreDetails= this.scoreService.getScoreDetails();
  }



}