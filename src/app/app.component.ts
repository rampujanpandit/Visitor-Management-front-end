import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visitor-management-system';
  config:any;
  collection=[];

  constructor(private router:Router,private route:ActivatedRoute){ 
  }

 
}
