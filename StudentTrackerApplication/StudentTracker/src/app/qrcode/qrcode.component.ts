import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model/Course';
import { UserService } from 'src/services/userService';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRcodeComponent implements OnInit{
  qrForm: FormGroup;
  dataList: Array<any> = [];
  response: any;
  button = "Load Data";
  isLoading = false;
  listAvailable: any;
  isLoaderSpinning = false;
  name = 'Test display image';
  thumbnail: any;
  public header:SafeHtml;
  public content:SafeHtml[];
  public image:SafeStyle;
  retrieveResonse: any
    message: string;
    imageName: any;
  base64Data: any;
  retrievedImage: string;
 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,private sanitizer: DomSanitizer
   
  ){ 
    this.userService.getAllCourses().subscribe((response) => {
      console.log("courses",response);
      if (response != null) {
        this.listAvailable = response;
        this.dataList = response
        console.log(response.data);
      }
    });
  }

  ngOnInit(): void {
    this.qrForm = this.formBuilder.group({
      courseIteam: ['', Validators.required],
    });
  }
  onSubmit(){
    console.warn('course data', this.qrForm.value);
     console.warn('data list', this.dataList);
    let obj = this.dataList.filter((d) => {
        return this.qrForm.value.courseIteam as number == d.id
    })[0];
   
   
    this.qrForm.value
    let rqPayload = {
      courseId:obj.id,
      otherData : "teregarding coourse",
      active : true,
      createdOn : "2022-10-19",
      courseName:obj.name 
    }

    this.userService.generateQrCode(rqPayload).subscribe(( baseImage: any)=>{
      console.log("baseImage",baseImage);
      const blobData =  this.convertBase64ToBlobData(baseImage.data);
      
        const blob = new Blob([blobData], { type: "image/png" });
        const url = window.URL.createObjectURL(blob);
        console.log("url",url);
        // window.open(url);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Qr_Code';
        link.click();
    
     },

      error=>console.log(error)
      );}

        convertBase64ToBlobData(base64Data: string, contentType: string='image/png', sliceSize=512) {
        const byteCharacters = atob(base64Data);
        const byteArrays = [];
    
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
    
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
    
          const byteArray = new Uint8Array(byteNumbers);
    
          byteArrays.push(byteArray);
        }
    
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
      }
    
      
  }





