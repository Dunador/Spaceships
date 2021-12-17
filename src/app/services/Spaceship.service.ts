import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Spaceship } from '../interfaces/Spaceship';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  // This is to mock the service given in the assessment.  Using .pipe(delay()) to simulate an actual HTTP call.  

constructor() { }
  getSpaceshipsA(): Observable<Spaceship[]> {
    const randomShips: Spaceship[] = [
      {
        name: "ShipV",
        classification: "Small"
      },
      {
        name: "ShipZ",
        classification: "Medium"
      },
      {
        name: "ShipP",
        classification: "Big"
      }
    ];
    
    return of(randomShips).pipe(delay(3000));
  }

  getSpaceshipsB(): Observable<Spaceship[]> {
    const randomShips: Spaceship[] = [
      {
        name: "ShipP",
        classification: "Small"
      },
      {
        name: "ShipS",
        classification: "Medium"
      },
      {
        name: "ShipL",
        classification: "Big"
      }
    ];

    return of(randomShips).pipe(delay(4000));
  }
}
