import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: []
})
export class RoomListComponent implements OnInit {

  rooms: Array<RoomModel>;
  cols: Array<string> = ['action', 'name', 'price'];

  constructor(private servRoom: RoomService) { }

  ngOnInit() {
    this.servRoom.getAllRooms().subscribe(data => this.rooms = data);
  }

}
