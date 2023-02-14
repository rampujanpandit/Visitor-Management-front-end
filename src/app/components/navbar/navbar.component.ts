import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // constructor( private snack:MatSnackBar){

  // }

  visitors:any;

  constructor(private visitorService:VisitorService,private router:Router){

    }

  ngOnInit(): void {
    
  }

}
