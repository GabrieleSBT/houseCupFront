import { Injectable } from "@angular/core";
import { HouseDto } from "./house-dto";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HouseRankingDto } from "./house-ranking-dto";

@Injectable({
    providedIn: 'root'

})
export class ScoreService{
    constructor(private http:HttpClient){}
    getScoreDetails():Observable<HouseRankingDto> {
        return this.http.get<HouseRankingDto>("http://localhost:8080/ranking");
    }

}