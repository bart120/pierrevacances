import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './room-top-five.component.html',
  styles: []
})
export class RoomTopFiveComponent implements OnInit {

  rooms: Array<RoomModel>;

  constructor() { }

  ngOnInit() {
    this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Pegase', image: 'Pegase.jpg' }
    ];
  }

}
