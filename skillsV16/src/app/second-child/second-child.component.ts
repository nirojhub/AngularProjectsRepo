import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styles: [
  ]
})
export class SecondChildComponent {
  approved: boolean = false;
  @ViewChild('fName') fName! : ElementRef;
  getApproval(cb:HTMLInputElement){
    //this.fName = cb.value;
    console.log(this.fName?.nativeElement.value);
  }
  calledFromParent(){
    console.log("Called from Parent");    
  }
}
