import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Component } from '@angular/core';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ScoreComponent } from './house/score/score.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';


export const routes: Routes = [
    {path:'search', component:StudentListComponent},
    {path: 'detail', component:StudentDetailComponent},
    {path: 'houses',component:ScoreComponent},
    {path: 'score',component:HouseDetailComponent},


];