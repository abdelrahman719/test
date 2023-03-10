import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './components/home/home.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FirstGuard } from './Guard/first.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'new-pass',component:NewPassComponent,canActivate:[FirstGuard]},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[MessageService]
})
export class AppRoutingModule { }
