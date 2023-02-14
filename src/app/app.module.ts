import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateVisitorComponent } from './create-visitor/create-visitor.component';
import { FormsModule } from '@angular/forms';
import { UpdateVisitorComponent } from './update-visitor/update-visitor.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { VisitorService } from './components/visitor.service';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VisitorListComponent,
    CreateVisitorComponent,
    UpdateVisitorComponent,

  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
    
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
