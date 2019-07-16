import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styles: []
})
export class RoomDetailComponent implements OnInit {

  obsRoom: Observable<RoomModel>;

  constructor(private route: ActivatedRoute, private servRoom: RoomService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.obsRoom = this.servRoom.getRoomById(id);
  }

}
