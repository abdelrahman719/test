import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirstGuard implements CanActivate {
  constructor(private auth:AuthService , private routes:Router,private messageService: MessageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.auth.firstGuard == false){
        this.routes.navigate(['home'])
        this.auth.guardMsg = true
        return false
      }else{
        this.auth.guardMsg = false
        return true;
      }
  }

}
