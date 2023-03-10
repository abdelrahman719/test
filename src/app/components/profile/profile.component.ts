import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements DoCheck,OnInit {
  constructor(public auth:AuthService){}
  ngOnInit(): void {
    this.auth.firstGuard = false
  }
  ngDoCheck(): void {
  }
}
