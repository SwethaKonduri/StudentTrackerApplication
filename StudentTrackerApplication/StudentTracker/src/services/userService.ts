import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from 'src/model/user';
import { config } from 'src/config/config';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/model/Course';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,private router: Router) { }

     private baseUrl = 'https://round-concept-367712.uc.r.appspot.com'; 
       //private baseUrl =  'http://localhost:8080';

    getAll() {
    let  token = sessionStorage.getItem("token");
    let header = new HttpHeaders().set('token','${token}');
    return this.http.get<User[]>(`${config.apiUrl}/getAll`,{headers:header});
    }

    register(user: User) {
        return this.http.post(`${this.baseUrl}/user/add`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/user/${id}`);
    }

    login(id: String, password: String): Observable<any> {
        let login = {id,password};
        return this.http.post(`${this.baseUrl}/user/login`,login);
    }
    getAllCourses() {
        let  token = sessionStorage.getItem("token");
        console.log("token",token);
        let header = new HttpHeaders().set('token',''+token);
        return this.http.get<any>(`${this.baseUrl}/course/viewAll`,{headers:header});
    }

    generateQrCode(payload : any): Observable<any> {
        let  token = sessionStorage.getItem("token");
        let header = new HttpHeaders().set('token',''+token);
        const imageData = this.http.post<any>(`${this.baseUrl}/qr/generate`,payload,{headers:header});
        console.log("imageData",imageData);
       return imageData;
    }

        public  isAthunticated(){
        let token = sessionStorage.getItem("token");
        if(token!= null && token != ''){
        return true;
        }else{
            return false;
        }  
        }

    logout(){
        sessionStorage.setItem("token","");
        sessionStorage.setItem("facultyId","");
        alert("Successfully Logged Out");
        this.router.navigate(['/login']);
    }

    addCourse(name: String, desc: String): Observable<any> {
        let  token = sessionStorage.getItem("token");
        console.log("token",token);
        let header = new HttpHeaders().set('token',''+token);
        let obj = {name,desc};
        console.log("course payload",obj);
        return this.http.post<any>(`${this.baseUrl}/course/add`,obj,{headers:header});
    }

    viewAllAttendance() {
        let  token = sessionStorage.getItem("token");
        console.log("token",token);
        let header = new HttpHeaders().set('token',''+token);
        return this.http.get<any>(`${this.baseUrl}/attend/viewAll`,{headers:header});
    }
}