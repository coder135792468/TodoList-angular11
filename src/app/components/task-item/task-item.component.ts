import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:any;
  faTimes = faTimes;

  @Output() onDeleteTask :EventEmitter<Task>= new EventEmitter();
  @Output() onToogleReminder:EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:any){
    // console.log(task);
    this.onDeleteTask.emit(task)
  }
  toggleReminder(task:any){
  this.onToogleReminder.emit(task)
}

}
