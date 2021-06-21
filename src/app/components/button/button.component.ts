import { Component, Input, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 
  // for taking props we need someting like this input 
  @Input() text:string = '';
  @Input() color:string = '';
  
  //passing the value to parent component
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {}

  onClick(){
    console.log('gello ');
    
    this.btnClick.emit()
  }
}
