import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from './visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private baseURL:String = "http://localhost:9191/api/visitors/";


  constructor(private httpClient: HttpClient) { }

  getVisitorList(): Observable<Visitor[]>{
    return this.httpClient.get<Visitor[]>(`${this.baseURL}`);
  }

  createVisitor(visitor: any): Observable<any>{
    console.log("service class"); 
    return this.httpClient.post(`${this.baseURL}`,visitor);
  }

  getVisitorById(id:number):Observable<Visitor>{
    return this.httpClient.get<Visitor>(`${this.baseURL}${id}`);

  }

  updateVisitor(id:number,visitor:Visitor):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}${id}`,visitor);
  }

  deleteVisitor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }


//pagination....
  getVisitorPagination(pageNumber:number,pageSize:number): Observable<any>
  {
      return this.httpClient.get<any>(`${this.baseURL}pagination?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
   
  //Globally Search
  getSearchData(searchdata:any):Observable<any>
{
  console.log(searchdata);
   return this.httpClient.get<any>(`${this.baseURL}search?query=${searchdata}`)
}

//search data by name email purpose date & Time
getDataUsingField(name:String,email:String,purpose:String,visitingDate:String):Observable<any>
{
    return this.httpClient.get<any>(`${this.baseURL}advanceSearch?full_name=${name}&email_id=${email}&purpose=${purpose}&visiting_date=${visitingDate}`)
}

getDateUsingField(startingDate:String,endingDate:String):Observable<any>
       {
          console.log(startingDate,endingDate);  
           return this.httpClient.get<any>(`${this.baseURL}p/${startingDate}/${endingDate}`)
        }
}
