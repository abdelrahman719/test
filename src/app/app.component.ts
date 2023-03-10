import { Component, OnInit, DoCheck } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit ,DoCheck{
  title = 'portal';
  constructor(private messageService: MessageService){}
  ngDoCheck(): void {
  }
  ngOnInit(): void {
    this.addSingle()
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
}
