import { TestBed, inject } from '@angular/core/testing';

import { MiHttpService } from './mi-http.service';

describe('MiHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiHttpService]
    });
  });

  it('should be created', inject([MiHttpService], (service: MiHttpService) => {
    expect(service).toBeTruthy();
  }));
});
