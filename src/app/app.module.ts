import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/angular/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PrimeModule } from './modules/prime/prime.module';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPassComponent,
    ProfileComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeModule,
    ToastModule
  ],

  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
