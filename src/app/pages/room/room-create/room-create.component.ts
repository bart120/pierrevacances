import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styles: []
})
export class RoomCreateComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.min(0)]),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image Pegase' },
    { id: 'Calliope.jpg', image: 'Image Calliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(private servRoom: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.formRoom.valid) {
      const room: RoomModel = this.formRoom.value as RoomModel;
      // console.log(room);
      this.servRoom.insert(room).subscribe(data => {
        this.snack.open(`Salle ${data.name} créée avec l'id ${data.id}.`, 'OK', { duration: 3000 });
      }, err => {
        console.warn(err);
        this.snack.open(`Erreur: ${err.message}.`, 'OK', { duration: 3000 });
      });
    }
  }

}
