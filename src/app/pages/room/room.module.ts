import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomService } from 'src/app/services/room.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoomTopFiveComponent,
    RoomCreateComponent,
    RoomListComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    RoomTopFiveComponent
  ],
  providers: [
    // RoomService
  ]
})
export class RoomModule { }
