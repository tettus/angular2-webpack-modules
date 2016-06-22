import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { Http } from '@angular/http';
 
 
 
 @Component({
  selector: 'about',
  templateUrl:'src/app/pages/about.template.html',
  
  directives: [ROUTER_DIRECTIVES]
})
export class About {}