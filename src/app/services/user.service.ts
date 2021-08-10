import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Blocs} from '../models/blocs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private blocs: Blocs[] = [{
  type_adress : 'hhhh',
  type_voie : 'jjj',
  rue : 'rue de la paix',
  ville : 'paris',
  numero : '235645'
},
  { type_adress : 'hhhh',
    type_voie : 'jjj',
    rue : 'rue de la paix',
    ville : 'paris',
    numero : '23564755'}
    ];
  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Durgesh',
      lastName: 'Pal',
      naissance: '24/11/1997',
      Blocs : this.blocs
    },
    {
      id: 2,
      firstName: 'Ankur',
      lastName: 'Pal',
      naissance: '24/11/1997',
      Blocs : this.blocs


    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
