import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  onlyOdd = true;
  evenNumbers = [2,4,6,8,10];
  oddNumbers = [1,3,5,7,9];

  showNumbers(){
    this.onlyOdd = !this.onlyOdd;
    if(this.onlyOdd)
      return this.oddNumbers;
    else return this.evenNumbers;
  }
}
