import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Task} from '../../task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 text:string='';
 reminder:boolean=false;
 @Output() onAddTask:EventEmitter<Task>= new EventEmitter();

 showAddTask:boolean = false;
  subscription:Subscription;
 constructor(private uiService : UiService){
   this.subscription = this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
 }


  ngOnInit(): void {
  }
addTask(){
if(!this.text){
  alert('Please add a todo!!..');
  return;
}
const newTask = {
  text:this.text,
  reminder:this.reminder,
}

this.onAddTask.emit(newTask);
console.log(this.reminder)
this.text='';
this.reminder=false;

}
}
