import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'

})
export class StudentService{
    constructor(private http:HttpClient){}
    getStudentDetails():Observable<StudentDetail[]>{
        return this.http.get<StudentDetail[]>("http://localhost:8080/student");
    }
}