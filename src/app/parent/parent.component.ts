import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  childMessage!: string;
  parentMessage = "This is parent message";

  receiverMessage(title: string){
    this.childMessage = title;
  }
  
}
