/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { N8nService } from './n8n.service';

describe('Service: N8n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [N8nService]
    });
  });

  it('should ...', inject([N8nService], (service: N8nService) => {
    expect(service).toBeTruthy();
  }));
});
