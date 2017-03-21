import { TestBed, inject } from '@angular/core/testing';

import { SeriesEffectsService } from './series-effects.service';

describe('SeriesEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesEffectsService]
    });
  });

  it('should ...', inject([SeriesEffectsService], (service: SeriesEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
