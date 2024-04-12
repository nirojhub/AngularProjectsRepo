import { CommonModule, formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  frmRegister: FormGroup;
  constructor(private http:HttpClient){
    this.frmRegister = this.createFormGroup();
  }
  ngOnInit(): void {  }
  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  /*createFormGroup(){
    return new FormGroup({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required])
    });
  }*/
  onSubmit(): void {
    this.http.post("http://localhost:3000/employees", 
      this.frmRegister.value
    ).subscribe(
      {
        next:response => console.log(response),
        error:err => console.log(err),
        complete: () => console.log("Done")
      }
    );
  }
}
