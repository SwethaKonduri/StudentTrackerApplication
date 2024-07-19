import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
 
  public items: any[] = [
    { title: '', url: 'https://dz0zjhi21dz2t.cloudfront.net/media/79957/tour/1594062608498/1366_front.jpg'},
    { title: '', url: 'http://media.bizj.us/view/img/1753691/florida-atlantic-university-fau*1200xx1500-844-0-18.jpg' },
    { title: '', url: 'https://www.fau.edu/about/images/fau.jpg' },
    { title: '', url: 'https://karandash.ua/storage/app/uploads/public/5e7/d2c/e5e/5e7d2ce5e8da7694143222.jpg' },
    { title: '', url: 'http://graphics8.nytimes.com/images/2013/02/20/sports/STADIUM/STADIUM-superJumbo.jpg' },
    { title: '', url: 'http://ww1.prweb.com/prfiles/2014/09/02/12139575/Florida_Atlantic_Owls_primary_logo.png' }
    
    
    
  ];

  public width = '100%';
  public height = '510px';
}
