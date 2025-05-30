import { TestBed } from '@angular/core/testing';

import { WEBProjectsService } from './wepProjects.service';

describe('WEBProjectsService', () => {
  let service: WEBProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WEBProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
