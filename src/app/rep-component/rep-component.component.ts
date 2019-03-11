import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rep-component',
  templateUrl: './rep-component.component.html',
  styleUrls: ['./rep-component.component.css']
})
export class RepComponentComponent implements OnInit {

  constructor() { }
  @Input() item: any;
  ngOnInit() {

  }

  daysCalcule() {
    const dateOfCreation = this.item.created_at;

    const date1 = new Date(dateOfCreation);
    const date2 = new Date;
    const date1_unixtime = date1.getTime();
    const date2_unixtime = date2.getTime();

    const timeDifference =   date2_unixtime - date1_unixtime;

    // convertir la date vers les jours
    const timeDifferenceInDays = timeDifference / 1000 / 60 / 60 / 24;

    // retourner une valeur approché
    return Math.round(timeDifferenceInDays);
  }
}
