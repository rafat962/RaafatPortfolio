/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Translate.loaderService } from './translate.loader.service';

describe('Service: Translate.loader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Translate.loaderService]
    });
  });

  it('should ...', inject([Translate.loaderService], (service: Translate.loaderService) => {
    expect(service).toBeTruthy();
  }));
});
