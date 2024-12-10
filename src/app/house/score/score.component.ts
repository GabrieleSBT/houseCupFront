import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseDetailComponent } from '../house-detail/house-detail.component';
import { HouseDto } from '../../model/house-dto';
import { ScoreService } from '../../model/score-service';
import { HouseRankingDto } from '../../model/house-ranking-dto';

@Component({
  selector: 'app-score',
  imports: [RouterModule,HouseDetailComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
  houseDetails!: HouseRankingDto;
  constructor(private scoreSerice: ScoreService) {
  }
  ngOnInit(): void {
      this.scoreSerice.getScoreDetails().subscribe(sl => {
        console.log(sl);
        this.houseDetails = sl;
      });
  }



}