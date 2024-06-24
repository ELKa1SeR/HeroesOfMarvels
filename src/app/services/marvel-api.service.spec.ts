/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MarvelApiService } from './marvel-api.service';

describe('Service: MarvelApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelApiService]
    });
  });

  it('should ...', inject([MarvelApiService], (service: MarvelApiService) => {
    expect(service).toBeTruthy();
  }));
});
