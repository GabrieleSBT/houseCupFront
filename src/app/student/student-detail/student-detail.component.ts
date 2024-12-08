import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentDetail } from '../../model/student-detail';

import { RouterModule } from '@angular/router';
import { ScoreDetail } from '../../model/score-detail';
import { ScoreService } from '../../model/score-service';


@Component({
  selector: 'app-student-detail',
  imports: [RouterModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent{


  @Input({
    required: true
  })
  detail: StudentDetail | null = null;
  @Output()
  chooseStudentEvent = new EventEmitter<StudentDetail>();

  onSelectStudent(student:StudentDetail){
    this.chooseStudentEvent.emit(student);
  }

}