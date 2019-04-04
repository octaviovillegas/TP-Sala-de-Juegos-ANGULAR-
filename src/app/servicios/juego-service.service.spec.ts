import { TestBed, inject } from '@angular/core/testing';

import { JuegoServiceService } from './juego-service.service';

describe('JuegoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuegoServiceService]
    });
  });

  it('should be created', inject([JuegoServiceService], (service: JuegoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
