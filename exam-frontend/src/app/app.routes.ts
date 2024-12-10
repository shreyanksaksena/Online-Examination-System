import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { ReportComponent } from './pages/report/report.component';
import { MyexamsComponent } from './pages/myexams/myexams.component';
import { MyreportComponent } from './pages/myreport/myreport.component';
import { StartexamComponent } from './pages/startexam/startexam.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path:'students', component:StudentsComponent},
    {path:'teachers', component:TeachersComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'category',component:CategoriesComponent},
    {path:'profile',component:ProfileComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'exams',component:ExamsComponent},
    {path:'myexams',component:MyexamsComponent},
    {path:'myreport/:examid',component:MyreportComponent},
    {path:'report',component:ReportComponent},
    {path:'add-question',component:AddQuestionComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'add-teacher',component:AddTeacherComponent},
    {path:'startexam/:examid',component:StartexamComponent}
];
