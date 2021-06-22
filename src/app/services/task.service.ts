import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Task} from '../task';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

//we basically doing the http get ,put , delete request also we update request
//we are doing the full crud operation
//c -> create
//r -> read
//u -> update
//d -> delete

export class TaskService {
private apiUrl = 'http://localhost:5000/taskList'
  constructor(private http:HttpClient ) {}

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTasks(task:Task):Observable<Task>{
    const url =  `${this.apiUrl}/${task.id}`
  return this.http.delete<Task>(url)
  }
  toggleTask(task:Task):Observable<Task>{
    const url =  `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url,task,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  addTask(task:Task):Observable<Task>{

    return this.http.post<Task>(this.apiUrl,task,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}