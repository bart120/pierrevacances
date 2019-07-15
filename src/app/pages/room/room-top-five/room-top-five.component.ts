import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-room-top-five',
  templateUrl: './room-top-five.component.html',
  styles: []
})
export class RoomTopFiveComponent implements OnInit {
  // private roomServ: RoomService;

  rooms: Array<RoomModel>;


  constructor(private roomServ: RoomService) {
    // this.roomServ = roomServ;
  }

  ngOnInit() {
    // this.rooms = this.roomServ.getTopFive();
    this.roomServ.getTopFive().subscribe(data => this.rooms = data);
    /*this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Pegase', image: 'Pegase.jpg' }
    ];*/
  }

}
