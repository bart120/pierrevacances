import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoomService {

    private topFive: Observable<Array<RoomModel>>;

    constructor(private http: HttpClient) {
        this.topFive = this.http.get<Array<RoomModel>>(environment.urlRooms);
    }

    getTopFive(): Observable<Array<RoomModel>> {
        /*this.http.get(environment.urlRooms).subscribe((data) => { 
            return data;
        });
        return null;*/
        // timer(0, 5000).subscribe(n => console.log(n));

        return timer(0, 5000).pipe(
            mergeMap(() => this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
                map(data => data.sort(
                    (a, b) => a.name > b.name ? 1 : -1).slice(0, 5)))
            ));
        // return this.topFive;
        /*return [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' }
        ];*/
    }

    getAllRooms(): Observable<Array<RoomModel>> {
        return this.http.get<Array<RoomModel>>(environment.urlRooms);
    }

    getRoomById(id: number): Observable<RoomModel> {
        return this.http.get<RoomModel>(`${environment.urlRooms}/${id}`);
    }

    insert(room: RoomModel): Observable<RoomModel> {
        return this.http.post<RoomModel>(environment.urlRooms, room);
    }

    update(room: RoomModel): Observable<RoomModel> {
        return this.http.put<RoomModel>(`${environment.urlRooms}/${room.id}`, room);
    }

    delete(id: number): Observable<RoomModel> {
        return this.http.delete<RoomModel>(`${environment.urlRooms}/${id}`);
    }
}
