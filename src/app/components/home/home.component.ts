import { Component ,DoCheck, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements DoCheck,OnInit {

  reg = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required)
  })

  hide:boolean = true
  passwordvalidmsg: string;
  confrimpassmsg: string;
  emailvalidmsg: string;
  passwordvalidstyle: string;
  confirmpassstyle: string;
  emailvalidstyle: string;
  responseData:any
  constructor(public auth:AuthService, private route:Router,private messageService: MessageService){
    this.passwordvalidmsg = 'password is required*';
    this.confrimpassmsg = 'confrim your password';
    this.emailvalidmsg = 'email is required*';
    this.passwordvalidstyle = 'black';
    this.emailvalidstyle = 'black';
    this.confirmpassstyle = 'black';
  }
  ngOnInit(): void {
    if(this.auth.guardMsg == true){
      this.messageGuard()
      console.log("yes");
    }
  }

  register(){
    this.auth.email = this.reg.controls['email'].value
    this.auth.password = this.reg.controls['password'].value
    this.auth.register().subscribe(res=>{
      console.log(res);
    this.auth.response = res
      if(res.body.response == "First Time Logged in"){
        this.auth.firstGuard = true
        this.messageSuccessNew()
        this.route.navigate(['new-pass'])
        console.log("new");
      }else if(res.body.response == "Old User"){
        this.auth.firstGuard = false
        this.messageSuccessOld()
        this.route.navigate(['profile'])
        console.log("old");
      }},()=>{
      this.route.navigate(['/home'])
      console.log("home");
      this.messageFailed()
    })
  }

  ngDoCheck(): void {
    if (
      this.reg.controls['password'].touched &&
      this.reg.controls['password'].dirty
    ) {
      this.passwordvalidstyle = 'red';
      this.passwordvalidmsg = 'password must be at least 8 characters';
      if (this.reg.controls['password'].valid) {
        this.passwordvalidstyle = 'green';
        this.passwordvalidmsg = 'password is valid';
      }
      if (this.reg.controls['password'].value == '') {
        this.passwordvalidmsg = 'password is required*';
        this.passwordvalidstyle = 'black';
      }
    }
    if (
      this.reg.controls['email'].touched &&
      this.reg.controls['email'].dirty
    ) {
      this.emailvalidmsg = ' email is invalid';
      this.emailvalidstyle = 'red';
      if (this.reg.controls['email'].valid) {
        this.emailvalidmsg = 'email is valid';
        this.emailvalidstyle = 'green';
      }
      if (this.reg.controls['email'].value == '') {
        this.emailvalidmsg = 'email is required*';
        this.emailvalidstyle = 'black';
      }
    }
}
messageSuccessOld(){
  console.log("successs");
  this.messageService.add({severity:'success', summary:'Login Successfully', detail:`Welcome ${this.auth.response.body.user[0].fields["First Name"]}`});
}
messageSuccessNew(){
  console.log("successs");
  this.messageService.add({severity:'success', summary:'Login Successfully', detail:`Welcome Please Update Your Password`});
}
messageFailed(){
  this.messageService.add({severity:'error', summary:'Oops', detail:'UserName Or Password Is Incorrect Please Try Again'});
}
messageGuard(){
  console.log("done");
  this.messageService.add({severity:'warn', summary:'Oops', detail:'You cant access this page anymore'});
}
}
