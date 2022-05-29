import { TestBed } from '@angular/core/testing';

import { FicheAnimalService } from './fiche-animal.service';

describe('FicheAnimalService', () => {
  let service: FicheAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
