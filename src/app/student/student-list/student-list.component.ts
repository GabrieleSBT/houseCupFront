import { Component, OnInit } from '@angular/core';
import { StudentDetail } from '../../model/student-detail';
import { StudentService } from '../../model/student-service';
import { log } from 'console';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

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
    this.studentDetails = this.studentService.getStudentDetails();
 }
  onStudentSelected(student: StudentDetail){
    console.log(student);

  }

}