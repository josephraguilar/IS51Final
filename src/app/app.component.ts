import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private flexModal: FlexModalService) { }

  ngOnInit() {
    document.getElementById("close").addEventListener("click", () =>  {
      alert("This application is designed by Joseph Aguilar. (C) 2018”");
    }
  }
  
  
  

}
