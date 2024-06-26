import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SecondChildComponent } from "./second-child/second-child.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'skills';
  divColor = "Black";
  approved = false;
  userInput = '';
  @ViewChild(SecondChildComponent) secondChild! : SecondChildComponent;
  messageToChild = 'Hello from Parent!!';
  getTitle(){
    return this.title;
  }
  
  makeBlue(){
    this.divColor = "Blue";
    this.approved = !this.approved;
  }

  handelInput(event : Event){
    //console.log("Event: ");
    this.userInput = (<HTMLInputElement>event.target).value;
  }

  messageFromFirstChild(message:string){
    console.log(message);    
  }

  ngAfterViewInit(){
    console.log(this.secondChild.calledFromParent());
    
  }

}
