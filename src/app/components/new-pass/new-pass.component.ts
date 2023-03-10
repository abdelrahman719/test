import { Component,DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css'],
})
export class NewPassComponent implements DoCheck {

  newreg = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  hide:boolean = true
  hideconfirm:boolean = true
  passwordvalidmsg: string;
  confrimpassmsg: string;
  emailvalidmsg: string;
  passwordvalidstyle: string;
  confirmpassstyle: string;
  emailvalidstyle: string;

  constructor(private auth:AuthService , private route:Router,private messageService: MessageService){
    this.passwordvalidmsg = 'password is required*';
    this.confrimpassmsg = 'confrim your password';
    this.emailvalidmsg = 'email is required*';
    this.passwordvalidstyle = 'black';
    this.emailvalidstyle = 'black';
    this.confirmpassstyle = 'black';
  }
  ngDoCheck(): void {
        if (
          this.newreg.controls['password'].touched &&
          this.newreg.controls['password'].dirty
        ) {
          this.passwordvalidstyle = 'red';
          this.passwordvalidmsg = 'password must be at least 8 characters';
          if (this.newreg.controls['password'].valid) {
            this.passwordvalidstyle = 'green';
            this.passwordvalidmsg = 'password is valid';
          }
          if (this.newreg.controls['password'].value == '') {
            this.passwordvalidmsg = 'password is required*';
            this.passwordvalidstyle = 'black';
          }
        }
        if (
          this.newreg.controls['confirmPassword'].dirty &&
          this.newreg.controls['confirmPassword'].touched
        ) {
          if (
            this.newreg.controls['password'].value ==
            this.newreg.controls['confirmPassword'].value
          ) {
            this.confrimpassmsg = 'password is valid';
            this.confirmpassstyle = 'green';
          } else {
            this.confrimpassmsg = 'password does not match';
            this.confirmpassstyle = 'red';
          }
          if (this.newreg.controls['confirmPassword'].value == '') {
            this.confrimpassmsg = 'confirm your password';
            this.confirmpassstyle = 'black';
          }
        }
        if (
          this.newreg.controls['email'].touched &&
          this.newreg.controls['email'].dirty
        ) {
          this.emailvalidmsg = ' email is invalid';
          this.emailvalidstyle = 'red';
          if (this.newreg.controls['email'].valid) {
            this.emailvalidmsg = 'email is valid';
            this.emailvalidstyle = 'green';
          }
          if (this.newreg.controls['email'].value == '') {
            this.emailvalidmsg = 'email is required*';
            this.emailvalidstyle = 'black';
          }
        }
  }
  updatePass(){
    this.auth.newPass = this.newreg.controls['confirmPassword'].value
    this.auth.updatePass().subscribe(res=>{
      if(res.body.success == "Password Updated Successfully"){
        this.messagePass()
        this.route.navigate(['home'])
      }
    })
  }

  messagePass(){
    console.log("successs");
    this.messageService.add({severity:'success', summary:'Login Successfully', detail:`Password Updated successfully`});
  }
}
