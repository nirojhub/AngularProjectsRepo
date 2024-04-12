import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

interface Employee{
  id: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent implements OnInit {
  employees$!: Observable<Employee[]>;
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.employees$ = this.http.get<Employee[]>(
      "http://localhost:3000/employees"
    );
  }
}
