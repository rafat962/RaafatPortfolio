import { TestBed } from '@angular/core/testing';

import { MobileProjectsService } from './mobile-projects.service';

describe('MobileProjectsService', () => {
  let service: MobileProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
