import { Component, OnInit } from '@angular/core';
import { StudentDetail } from '../../model/student-detail';
import { StudentService } from '../../model/student-service';
import { log } from 'console';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule,StudentDetailComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentDetails!: StudentDetail[];
  constructor(private studentService: StudentService) {
 }
  ngOnInit(): void{
    let osd: Observable<StudentDetail[]> = this.studentService.getStudentDetails();
    osd.subscribe({
      next: sts => this.studentDetails = sts,
      error: er => console.log(er)
    })
    ;
 }
  
}