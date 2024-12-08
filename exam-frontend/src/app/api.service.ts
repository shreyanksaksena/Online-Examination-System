import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASEURL:string="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }

  validate(data:any){
    return this.http.post<any>(this.BASEURL+"users/validate",data);
  }

  register(data:any){
    return this.http.post<any>(this.BASEURL+"users/register",data);
  }

  allusers(){
    return this.http.get<any[]>(this.BASEURL+'users');
  }

  //categories
  addcategory(data:any){
    return this.http.post<any>(this.BASEURL+'categories',data)
  }

  listallcategories(){
    return this.http.get<any[]>(this.BASEURL+'categories')
  }

  deleteCategory(id:number){
    return this.http.delete<any>(this.BASEURL+'categories/'+id)
  }

  //questions
  addQuestion(data:any){
    return this.http.post<any>(this.BASEURL+'questions',data)
  }

  allQuestions(){
    return this.http.get<any[]>(this.BASEURL+'questions')
  }
}
