import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path:'students', component:StudentsComponent},
    {path:'teachers', component:TeachersComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'category',component:CategoriesComponent},
    {path:'profile',component:ProfileComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'add-question',component:AddQuestionComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'add-teacher',component:AddTeacherComponent}
];
