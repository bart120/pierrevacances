import { Routes } from '@angular/router';
import { RoomCreateComponent } from './pages/room/room-create/room-create.component';
import { RoomListComponent } from './pages/room/room-list/room-list.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { RoomDetailComponent } from './pages/room/room-detail/room-detail.component';

export const ROUTES: Routes = [
    /*{ path: 'rooms', component: RoomListComponent },
    { path: 'rooms/create', component: RoomCreateComponent },*/
    {
        path: 'rooms', children: [
            { path: '', component: RoomListComponent },
            { path: 'create', component: RoomCreateComponent },
            { path: 'detail/:id', component: RoomDetailComponent }
        ]
    },

    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];
