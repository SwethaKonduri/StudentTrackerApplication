import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { GallaryComponent } from './gallary/gallary.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewAttandanceComponent } from './view-attandance/view-attandance.component';
import { ProfileComponent } from './profile/profile.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { CourseComponent } from './course/course.component';
import { DataTablesModule } from 'angular-datatables';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ImageGalleryComponent,
    GallaryComponent,
    ViewAttandanceComponent,
    ProfileComponent,
    FacultyHomeComponent,
    QRcodeComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollViewModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule   
,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
