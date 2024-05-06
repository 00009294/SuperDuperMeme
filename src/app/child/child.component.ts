import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string;
  @Output() greetEvent = new EventEmitter();
  childMessage = "this is child message";

  callParentGreet(){
    this.greetEvent.emit(this.childMessage);
  }

}
