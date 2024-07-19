import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { RegisterComponent } from './register/register.component';
import { ViewAttandanceComponent } from './view-attandance/view-attandance.component';

const routes: Routes = [
  {path: '' , redirectTo: '/gallery', pathMatch: 'full'},
  { path:'login' , component : LoginComponent },
  { path:'register', component : RegisterComponent },
  { path:'foolter', component : FooterComponent },
  { path:'gallery', component : GallaryComponent },
  { path:'qrCode', component : QRcodeComponent },
  { path:'viewAttandance', component : ViewAttandanceComponent },
  {path:'profile',component: ProfileComponent},
  {path:'facultyHome',component: FacultyHomeComponent},
  {path:'course',component: CourseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


