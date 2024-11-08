import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
  passcode:string="";
  check:boolean=false;
  constructor(private route:Router){}
  
submit(){
  if(this.passcode=="9346"){
    this.check=false;
    this.route.navigate([`/admin/ }`]);
    
  }else{
    this.check=true;
  }
}
}
