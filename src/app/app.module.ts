import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectoneComponent } from './projectone/projectone.component';
import { ProjecttwoComponent } from './projecttwo/projecttwo.component';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectoneComponent,
    ProjecttwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
