import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 
 
  '../assets/vendor/bootstrap/css/bootstrap.min.css',
  '../assets/vendor/bootstrap-icons/bootstrap-icons.css',
  '../assets/vendor/glightbox/css/glightbox.min.css',
  '../assets/css/style.css'
]
})
export class AppComponent {
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  ngOnInit() {
    console.log(window.innerWidth)
  
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
   
  }
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}