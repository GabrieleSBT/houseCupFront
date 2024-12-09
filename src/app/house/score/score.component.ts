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
  houseDetails!: ScoreDetail[];
  constructor(private scoreSerice: ScoreService) {
  }
  ngOnInit(): void {
      this.scoreSerice.getScoreDetails().subscribe(sl => {
        console.log(sl);
        this.houseDetails = sl;
      });
  }



}