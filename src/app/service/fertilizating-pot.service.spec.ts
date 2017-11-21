import { TestBed, inject } from '@angular/core/testing';

import { FertilizatingPotService } from './fertilizating-pot.service';

describe('FertilizatingPotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FertilizatingPotService]
    });
  });

  it('should be created', inject([FertilizatingPotService], (service: FertilizatingPotService) => {
    expect(service).toBeTruthy();
  }));
});
