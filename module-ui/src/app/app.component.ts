import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router';
import { Http } from '@angular/http';
import {Home} from './home/home.component.ts' ;
 
 
 @Component({
  selector: 'app',
  template:`<h3 id="universal">idnv-ui</h3>
			   
			  `,
  
  directives: [ROUTER_DIRECTIVES,Home],
  providers:[ROUTER_PROVIDERS]
})

@Routes([
  {path: '/Home',            component: Home },
  {path: '/About',            component: Home },
  {path: '/*',           component: Home }
])


export class App {}