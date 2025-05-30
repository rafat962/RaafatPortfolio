import { TestBed } from '@angular/core/testing';

import { ArcGisProjectsService } from './arc-gis-projects.service';

describe('ArcGisProjectsService', () => {
  let service: ArcGisProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcGisProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
