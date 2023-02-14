import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{

    // visitors: Array<any> = [];
  visitors:any;

  constructor(private visitorService: VisitorService,
    private router:Router){ }

     searchText:any;


  ngOnInit(): void{
    // this.getVisitors();
    this.search();
  }

  private getVisitors(){
    this.visitorService.getVisitorList().subscribe(data =>{
      this.visitors = data;
    });

  }

  updateVisitor(id: number){
    this.router.navigate(['update-visitor',id]);

  }

  deleteVisitor(id: number){
    this.visitorService.deleteVisitor(id).subscribe(data =>{
      this.search();
    })

  }

  
   pageNumber:number=0;
  pageSize:number=4;
  tP:any;
  pages:number=1;
  tE:number=0;
  arr:Array<number>=[];

  qwe:any;
  dataSearch(){
    //console.log("Hii");
    
   let resp= this.visitorService.getVisitorPagination(this.qwe-1,4);
   resp.subscribe(data=>this.visitors=data.content);

   //console.log(resp);
   
  }


  search(){
      let resp=this.visitorService.getVisitorPagination(this.pageNumber,this.pageSize);
      resp.subscribe(data=>{
        this.visitors=data.content;
        this.tP=data.totalPages;
        for (let index = 1; index <=this.tP; index++) {
          this.arr.push(index);
          
        }
      })
      this.arr=[]
      //console.log(this.visitors);
  }

  setPage(i:any,event:any){
    //event.prevendDefault();
    this.pageNumber=i;
    this.search();
  }
searchdata:any
  getData(val:any){    
    this.searchdata=val;
let res=this.visitorService.getSearchData(this.searchdata);
res.subscribe(data=>this.visitors=data);
  }

  name:string="";
  email:string="";
  purpose:string="";
  visitingDate:string="";

  getDataUsingField(val1:string,val2:string,val3:string,val4:string,){
this.name=val1;
this.email=val2;
this.purpose=val3;
this.visitingDate=val4;

console.log(`name:${this.name},email:${this.email},purpose:${this.purpose},visitingDate:${this.visitingDate}`);

if(this.name==="" && this.email==="" && this.purpose==="" && this.visitingDate===""){

}else{
 let result=   this.visitorService.getDataUsingField(this.name,this.email,this.purpose,this.visitingDate);
 result.subscribe(data=>this.visitors=data);
}
  
}

startingDate:String="";
endingDate:String="";

getDateUsingField(v1:String,v2:String){
    this.startingDate=v1;
    this.endingDate=v2;
    console.log(`startingDate:${this.startingDate},endingDate${this.endingDate}`);
    let resu = this.visitorService.getDateUsingField(this.startingDate,this.endingDate);
    resu.subscribe(data=>this.visitors=data);
   }
   nextprev(type:string){
     console.log(this.pageNumber);
     if(this.pageNumber>0){
      type==='add' ? this.pageNumber++ :this.pageNumber--;
     }else{
      type==='add' ? this.pageNumber=1 :this.pageNumber=0;
     }
     this.pages=this.pageNumber+1;
     console.log(this.tP);

     this.ngOnInit();
     
   }

   size:number=0;
   searchPage(){
    console.log("search page");
    let resp=this.visitorService.getVisitorPagination(this.pageNumber,this.pageSize);
    resp.subscribe(data=>{
      this.visitors=data.content;
      console.log(data);
      this.pageNumber=data.pageNumber
      this.pageSize=data.pageSize
      this.tE = data.totalElements
      this.tP =data.totalPages
      this.size=data.size
      for(let a=1;a<=this.tP;a++){
        this.arr.push(a);
      }

      
    });

    
   }
   Search(val:any){
    this.pageNumber=val-1;
    this.ngOnInit();

   }

   timer:any
   //debouncing 
   sendData(val:any){
    
    clearTimeout(this.timer)
    this.timer = setTimeout(() =>{
      // console.log(val);
      let resp = this.visitorService.getSearchData(val);
      resp.subscribe(data=>this.visitors=data);
    },650);
   }

   //status

   today=new Date();
   changeFormate:any=new DatePipe('en-US').transform(this.today,'YYYY-MM-dd');
   check:boolean=true
  //  changes:any=this.changeFormate

}
