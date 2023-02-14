import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  visitors: any;

  constructor(private visitorService: VisitorService,
    private router:Router){ }

  ngOnInit(): void {
      
  }

  updateVisitor(id: number){
    this.router.navigate(['update-visitor',id]);

  }



searchdata:any
  getData(val:any){ 
    if(val)  
   {
    this.searchdata=val;
    let res=this.visitorService.getSearchData(this.searchdata);
    res.subscribe(data=>this.visitors=data);
    // console.log(this.visitors.length=0);
    
    if(this.visitors.length==0){
      console.log(this.visitors.length);
      

      this.SearchTable();
       }
      }
     else{
      alert("Enter Data");
     }

  }
  SearchTable(){
    if(this.visitors.length==0){
      console.log("Hiiiii");
      
    }
    alert("No Record Found");
    this.router.navigate(['/create-visitor'])
  }

  eleteVisitor(id: number){
    this.visitorService.deleteVisitor(id).subscribe(data =>{
      // this.search();
    })

}
}
