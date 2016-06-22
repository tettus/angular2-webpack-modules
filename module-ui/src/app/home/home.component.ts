import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { Http } from '@angular/http';
 
 
 
 @Component({
  selector: 'home',
  templateUrl:'src/app/pages/home.template.html',
  
  directives: [ROUTER_DIRECTIVES]
})
export class Home {}