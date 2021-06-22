import { Component, OnInit } from '@angular/core';
import {Task} from '../../task';
import { TaskService } from '../../services/task.service';
//it is used for execution of observables
import { Subscription } from 'rxjs';

//ui service
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
//states in angular
  tasks: Task[] = [];
  showAddTask:boolean=false;
// this stores the subscription , we are storing it as states
  subscription:Subscription;

  //we are using services such as taskService and uiService so we need to initilize it in our constructor
 constructor(private taskService : TaskService,private uiService : UiService) {
 //we are storring the ontoogle from uiService if we look at ontooggle we value then we see are returning the values which we store as boolean 
// after that we subscribe it which returns the value which we store 
//we are doing this thing is uiServie not taskService
 this.subscription = this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }
deleteTask(task:Task){
//lets delte the delete tasks , delte Task value is defined in taskServie look at thsi
//after that we are just filter the array to make a new array;
  this.taskService.deleteTasks(task).subscribe(()=>{
    this.tasks = this.tasks.filter(t=>t.id !== task.id);
  });

}
toggleTask(task:Task){

  //we are just updating the tsk value then pass the task to the taskService which sendit to the json server
  //then subscribe to teh function of taskSerive
  //have a look at taskSerice
  task.reminder=!task.reminder;
 this.taskService.toggleTask(task).subscribe();
  
}

addTask(task:Task){

  //adding a task by taskSercie 
  //look above for more information...s
  this.taskService.addTask(task).subscribe((task)=>{
    this.tasks.push(task)
  });
  
}


}
