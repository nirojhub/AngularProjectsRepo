import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from "./../auth.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user$! : Observable<any>;
  loginStatus$!:Observable<boolean>;
  private lSubscription: Subscription = new Subscription;
  frmLogin: FormGroup;
  constructor(private http:HttpClient, private router:Router, 
    private auth:AuthService){
    this.frmLogin = this.createFormGroup();
  }
  ngOnInit(): void {  }
  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    let currentUser = this.frmLogin.value.username;
    let currentPassword = this.frmLogin.value.password;
    this.loginStatus$ = this.auth.login(this.frmLogin.value);
    this.lSubscription = this.loginStatus$.subscribe(data=>{
      if (data) {
        console.log("user is Valid");
        this.router.navigateByUrl('home');
      }
      else{
        console.log("Invalid user");
        this.router.navigateByUrl('login');
      }
    });

    /* this. user$ = this.http.get(
      "http://localhost:3000/employees",
      {
        params:{username:currentUser, password:currentPassword}
      }
    );
    this.user$.subscribe(data => {
      if (data.length > 0 && data[0].password == currentPassword) {
        console.log("user is Valid");
        localStorage.setItem('validUser', currentUser);
        this.router.navigateByUrl('home');
      }
      else{
        console.log("Invalid user");
        this.router.navigateByUrl('login');
      }
    }); */
  }
  ngOnDestroy(): void {
    this.lSubscription.unsubscribe();
  }

}
