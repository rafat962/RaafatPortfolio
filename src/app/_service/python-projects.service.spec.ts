import { TestBed } from '@angular/core/testing';

import { PythonProjectsService } from './python-projects.service';

describe('PythonProjectsService', () => {
  let service: PythonProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
