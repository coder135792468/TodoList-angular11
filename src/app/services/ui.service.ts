import { ThrowStmt } from '@angular/compiler';
import { Injectable} from '@angular/core';

//Observable is basically the set of any time of value , subject is the multicaster Observable;
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  //this updates the value;
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  //this one returns the value that updates
  onToggle():Observable<any>{
   return this.subject.asObservable();
  }
} 
