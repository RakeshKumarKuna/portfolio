import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const section = (fragment: string) => () =>
  inject(Router).createUrlTree(['/'], { fragment });

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', redirectTo: '', pathMatch: 'full' },
  { path: 'About', redirectTo: section('about') },
  { path: 'Works', redirectTo: section('experience') },
  { path: 'Contact', redirectTo: section('contact') },
  { path: '**', redirectTo: '' },
];
