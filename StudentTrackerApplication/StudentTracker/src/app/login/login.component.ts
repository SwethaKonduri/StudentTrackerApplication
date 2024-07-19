import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/model/Login';
import { UserService } from 'src/services/userService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
   
  ){ }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  get f() 
  { return this.loginForm.controls;
  }
 
  onSubmit() { 
    console.warn('Your order has been submitted', this.loginForm.value);
    this.userService.login(this.loginForm.value.id, this.loginForm.value.password).subscribe((response)=>{
      
      if(response.data == null){
        alert("Invalid credentials");
        this.router.navigate(['/login']);

      }else{
        sessionStorage.setItem('token',response.data);
        sessionStorage.setItem('facultyId',this.loginForm.value.id);
        console.warn('token', response.data);
         alert("Successfully Logged in.");
        this.router.navigate(['/facultyHome']);
       
      }
    
     },

      error=>console.log(error)
      );}

}
