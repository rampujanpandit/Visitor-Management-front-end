import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { CreateVisitorComponent } from './create-visitor/create-visitor.component';
import { UpdateVisitorComponent } from './update-visitor/update-visitor.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'visitors', component:VisitorListComponent},
  {path:'create-visitor', component: CreateVisitorComponent},
  {path:'',redirectTo:'visitors',pathMatch:'full'},
  {path:'update-visitor/:id',component: UpdateVisitorComponent},
  {path:'Navbar',component: NavbarComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
