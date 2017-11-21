import { TestBed, inject } from '@angular/core/testing';

import { WateringPotService } from './watering-pot.service';

describe('WateringPotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WateringPotService]
    });
  });

  it('should be created', inject([WateringPotService], (service: WateringPotService) => {
    expect(service).toBeTruthy();
  }));
});
