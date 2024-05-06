import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string;
  childMessage = "this message comes from child compoenent";

  @Output() messageSender = new EventEmitter();

  receiveMessage(){
    this.messageSender.emit(this.childMessage);
  }

  removeMessage(){
    this.messageSender.emit('');
  }

}
