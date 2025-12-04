import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  visitorDetails: any = {};
  ngOnInit(): void {
    //this.getBrowserDetails();
  }
   getBrowserDetails(): void {
    this.visitorDetails = {
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      location:navigator.geolocation.getCurrentPosition(data=>{
        this.visitorDetails.latitude = data.coords.latitude;
        this.visitorDetails.longitude = data.coords.longitude;
      }),
    };
    console.log(this.visitorDetails); // You can display this in your UI or send to your server
  }

}
