/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpaceshipService } from './Spaceship.service';

describe('Service: Spaceship', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceshipService]
    });
  });

  it('should ...', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service).toBeTruthy();
  }));
});
