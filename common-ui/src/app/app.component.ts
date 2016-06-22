import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router';
import { Http } from '@angular/http';
import {Home} from './home/home.component.ts' ;
 import {About} from './home/about.component.ts' ;
 
 @Component({
  selector: 'app',
  template:`<h3 id="universal">Angular2 Universal</h3>
			  <nav>
			    <a [routerLink]=" ['./Home'] ">Home</a>
			    <a [routerLink]=" ['./About'] ">About</a>
			  </nav>
			  <router-outlet></router-outlet>
			  `,
  
  directives: [ROUTER_DIRECTIVES,Home],
  providers:[ROUTER_PROVIDERS]
})

@Routes([
  {path: '/Home',            component: Home },
  {path: '/About',            component: About },
  {path: '/*',           component: Home }
])


export class App {}