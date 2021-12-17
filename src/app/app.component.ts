import { Spaceship } from './interfaces/Spaceship';
import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from './services/Spaceship.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class SpaceshipComponent implements OnInit {

  spaceshipList: Spaceship[];
  isLoading: boolean = true;

  constructor(private spaceshipService: SpaceshipService) {}

  ngOnInit() {
    forkJoin([this.spaceshipService.getSpaceshipsA(), this.spaceshipService.getSpaceshipsB()])
    .pipe(catchError(error => {
      console.error(error);
      return of(error);
    }))
    .subscribe((spaceShips) => {
      // Concat both observables together to create a full, unsorted, potentially non-unique list.
      this.spaceshipList = spaceShips[0].concat(spaceShips[1]);
      // Remove any duplicates using a Map, then splitting it back into an array.  ES6 magic!
      this.spaceshipList = [...new Map(this.spaceshipList.map(ship => [ship.name, ship])).values()]
      // Sort by ship name, using Array.sort.
      this.spaceshipList = this.spaceshipList.sort((a, b) => a.name.localeCompare(b.name));
      // Turn loading off.
      this.isLoading = false;
    });
  }


}
