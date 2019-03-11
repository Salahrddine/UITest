import { RepService } from './rep.service';
import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';

  constructor(private repservice: RepService) {
  }

  Items ;
  
  ngOnInit() {
    this.getItems() ;
    
  }

  getItems() {
    this.repservice.getRepository()
      .subscribe(
        res => { this.Items = res ;
                console.log(this.Items)},
        error => console.log("Error ::" + error)
      );
  }

}
