import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";

@Injectable({
    providedIn: 'root'

})
export class StudentService{
    private studentDetails: StudentDetail[] = [
        {
            id:1,
            nome:'Danilo Vulpiani',
            course: 'JAITA130',
            punteggio:150,
            casata:'Gryffinfor'

        },
        {
            id:2,
            nome:'Gabriele LoStronzo',
            course: 'JAITA131',
            punteggio:600,
            casata:'Slytherin'

        },
        {
            id:3,
            nome:"Myryam NonVuoleCampare100Anni",
            course: 'JAITA130',
            punteggio:1000,
            casata:'HufflePuff'

        }


    ];
    getStudentDetails():StudentDetail[]{
        return this.studentDetails;
    }
}