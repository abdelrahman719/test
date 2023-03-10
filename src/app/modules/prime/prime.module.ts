import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ToastModule,
    RippleModule
  ]
})
export class PrimeModule { }
