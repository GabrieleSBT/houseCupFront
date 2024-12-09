import { Injectable } from "@angular/core";
import { ScoreDetail } from "./score-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'

})
export class ScoreService{
    constructor(private http:HttpClient){}
    getScoreDetails():Observable<ScoreDetail[]> {
        return this.http.get<ScoreDetail[]>("http://localhost:8080/ranking");
    }

}