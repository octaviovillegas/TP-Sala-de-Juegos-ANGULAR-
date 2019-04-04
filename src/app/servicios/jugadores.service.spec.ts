import { TestBed, inject } from '@angular/core/testing';

import { JugadoresService } from './jugadores.service';

describe('JugadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadoresService]
    });
  });

  it('should be created', inject([JugadoresService], (service: JugadoresService) => {
    expect(service).toBeTruthy();
  }));
});
