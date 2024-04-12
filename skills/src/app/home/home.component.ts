import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fName = signal('Axle');
  lName = signal('');
  constructor(){
    this.fName.set('AxelB');
    this.lName.update(prevValue => 'Brar');
  }

  getFullName(){
    let fullName = computed(() => this.fName() + ' ' + this.lName());
    return (fullName());
  }
}
