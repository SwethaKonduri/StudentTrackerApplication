import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/user';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
   
  ){ }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  

  onSubmit() { 
    this.submitted = true;
    console.warn('data from form', this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe(data => {
      //this.alertService.success('Registration successful', true);
      alert("Registration successful");
      this.router.navigate(['/login']);
  },
  error => {
      //this.alertService.error(error);
      alert("Registration failed");
      this.loading = false;
  });;}

}
