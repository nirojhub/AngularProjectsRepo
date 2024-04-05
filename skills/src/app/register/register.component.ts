import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  frmRegister: FormGroup;
  constructor(){
    this.frmRegister = this.createFormGroup();
  }
  ngOnInit(): void {  }
  createFormGroup(){
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
  onSubmit(): void {
    console.log(this.frmRegister.value);
  }
}
