import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/userService';
import {DataTablesModule} from 'angular-datatables';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-view-attandance',
  templateUrl: './view-attandance.component.html',
  styleUrls: ['./view-attandance.component.scss']
})
export class ViewAttandanceComponent implements OnInit,OnDestroy  {
  attendanceList: Array<any> = [];
  response: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,private sanitizer: DomSanitizer
   
  ){ 
    this.userService.viewAllAttendance().subscribe((response) => {
      if (response != null) {
        this.attendanceList = response.data;
        // initiate our data table
        this.dtTrigger.next("");
        console.log("attendanceList",this.attendanceList);
      }
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
        lengthMenu : [5, 10, 25],
          processing: true
        };
    }

}