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
     this.studentService.getStudentDetails().subscribe(sl => {
      console.log(sl);
      this.studentDetails = sl;
     });
 }
  
}