import { TestBed, inject } from '@angular/core/testing';

import { TvdbService } from './tvdb.service';

describe('TvdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvdbService]
    });
  });

  it('should ...', inject([TvdbService], (service: TvdbService) => {
    expect(service).toBeTruthy();
  }));
});
