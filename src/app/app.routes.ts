
import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectoneComponent } from './projectone/projectone.component';
import { ProjecttwoComponent } from './projecttwo/projecttwo.component';
export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Works',component:WorksComponent,
    children:[
      {path:'project1',component:ProjectoneComponent},
      {path:'project2',component:ProjecttwoComponent},
      {path:'',component:ProjectoneComponent}
    ]
  },
  {path:'Contact',component:ContactComponent}
];
