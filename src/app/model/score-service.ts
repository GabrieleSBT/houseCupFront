import { Injectable } from "@angular/core";
import { ScoreDetail } from "./score-detail";

@Injectable({
    providedIn: 'root'

})
export class ScoreService{
    private scoreDetails: ScoreDetail[] = [
        {
            id:1,
            nomeCasa:'hufflePuff',
            punteggioTotale:5000

        },
        {
            id:2,
            nomeCasa:'Ravenclaw',
            punteggioTotale:1

        },
        {
            id:3,
            nomeCasa:'Gryffindor',
            punteggioTotale:0

        },
        {
            id:4,
            nomeCasa:'Slytherin',
            punteggioTotale:5

        }

    ];
    getScoreDetails():ScoreDetail[]{
        return this.scoreDetails;
    }

}