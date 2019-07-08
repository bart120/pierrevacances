import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomListComponent } from './room-list/room-list.component';

@NgModule({
  declarations: [
    RoomTopFiveComponent,
    RoomCreateComponent,
    RoomListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RoomTopFiveComponent
  ]
})
export class RoomModule { }
