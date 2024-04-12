import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styles: [
  ]
})
export class FirstChildComponent implements OnInit{
  @Input() messageFromParent : string = "";
  messageFromFirstChild = "Message From FirstChild";
  @Output() eventEmitter = new EventEmitter<string>();
  ngOnInit(): void {
  
  }
  generateChildMessage(){
    this.eventEmitter.emit(this.messageFromFirstChild);
  }
}
