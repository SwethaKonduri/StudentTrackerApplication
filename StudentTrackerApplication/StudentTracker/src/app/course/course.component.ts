import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  courseForm: FormGroup;
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
  this.courseForm = this.formBuilder.group({
    name: ['', Validators.required],
    desc: ['', Validators.required]
  });
}


get f() 
{ return this.courseForm.controls;
}

onSubmit() { 
  console.warn('Your order has been submitted', this.courseForm.value);
  this.userService.addCourse(this.courseForm.value.name, this.courseForm.value.desc).subscribe((response)=>{
if(response != null){
       alert("Course Sdded Successfully.");
       this.courseForm.reset();
}else{
  alert("Failed to add course");
}
  
   },

    error=>console.log(error)
    );}

}
