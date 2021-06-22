import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //taking props from parent component
  @Input() task:any;

  //we have import it form a angular font module that we have imported above
  faTimes = faTimes;

  //emmiting to parent components
  @Output() onDeleteTask :EventEmitter<Task>= new EventEmitter();
  @Output() onToogleReminder:EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  //see we are emitting these event with some values
  onDelete(task:any){
    // console.log(task);
    this.onDeleteTask.emit(task)
  }
  toggleReminder(task:any){
  this.onToogleReminder.emit(task)
}

}
