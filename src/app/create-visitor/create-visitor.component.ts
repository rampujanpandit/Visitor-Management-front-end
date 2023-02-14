import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitor } from '../components/visitor';
import { VisitorService } from '../components/visitor.service';

@Component({
  selector: 'app-create-visitor',
  templateUrl: './create-visitor.component.html',
  styleUrls: ['./create-visitor.component.css']
})
export class CreateVisitorComponent implements OnInit{

  visitor: Visitor = new Visitor();
  surveyForm: any;
  
  constructor(private visitorService: VisitorService, 
    private router:Router){ }

  ngOnInit(): void {
      
  }

  saveVisitor(){

    this.visitorService.createVisitor(this.visitor).subscribe(data =>{
      console.log(data);
      this.goToVisitorList();
      

    },
    error => console.log(error));
    
  }

  goToVisitorList(){
    this.router.navigate(['/visitors']);

  }

  onSubmit(){
    // console.log("hiii");
    let res = this.visitorService.createVisitor(this.registerForm.value).subscribe(data=>{
      console.log(data);
      this.goToVisitorList();
      
    })
  }
  


  serachMobile(val:any){
    
    console.log(val);
    
  }



  //new create form

registerForm = new FormGroup({ 
  // id:new FormControl("",[Validators.required]),

  fullName:new FormControl("",[Validators.required,
    Validators.minLength(2),
    Validators.pattern("[a-zA-Z].*")]),
  
  gender:new FormControl("",[Validators.required,
    Validators.maxLength(6),
    Validators.minLength(4),
    Validators.pattern("[a-zA-Z].*")
  ]),
  mobileNo:new FormControl("",[Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  Validators.pattern("[0-9]*")
]),

  emailId:new FormControl("",[
    Validators.required,
    Validators.email,
    Validators.pattern("[a-zA-Z].*")
  ]),

  address:new FormControl("",[Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern("[a-zA-Z].*")
  ]),

  purposeToVisit:new FormControl("",[Validators.required]),
  visitingDate:new FormControl("",[Validators.required]),
});


  
  get fullName(): FormControl{
    return this.registerForm.get('fullName') as FormControl;
  }
  get gender(): FormControl{
    return this.registerForm.get('gender') as FormControl;
  }
  get mobileNo(): FormControl{
    return this.registerForm.get('mobileNo') as FormControl;
  }

  get emailId(): FormControl{
    return this.registerForm.get('emailId') as FormControl;
  }

  get address(): FormControl{
    return this.registerForm.get('address') as FormControl;
  }

  get purposeToVisit(): FormControl{
    return this.registerForm.get('purposeToVisit') as FormControl;
  }

  get visitingDate(): FormControl{
    return this.registerForm.get('visitingDate') as FormControl;
  }


}
