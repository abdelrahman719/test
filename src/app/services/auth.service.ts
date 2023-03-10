import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messageSuccess() {
    throw new Error('Method not implemented.');
  }
  messageFailed() {
    throw new Error('Method not implemented.');
  }
  email:any
  password:any
  response:any
  newPass:any
  firstGuard:boolean = false
  guardMsg :boolean = false

  constructor(private http:HttpClient,private messageService: MessageService) {
    this.email = ""
    this.password = ""
    this.newPass = ""
  }
  register():Observable<any>{
    return this.http.post<any>("https://a648-102-40-54-40.eu.ngrok.io/api/login", {email:this.email , password:this.password},{ observe: 'response' })
  }

  updatePass():Observable<any>{
    return this.http.post<any>("https://a648-102-40-54-40.eu.ngrok.io/api/user/update/password",{email:this.email,password:this.newPass},{ observe: 'response' })
  }

  messageGuard(){
    this.messageService.add({severity:'warn', summary:'Oops', detail:'You cant access this page anymore'});
  }
}
