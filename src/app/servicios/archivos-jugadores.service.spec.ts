import { TestBed, inject } from '@angular/core/testing';

import { ArchivosJugadoresService } from './archivos-jugadores.service';

describe('ArchivosJugadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivosJugadoresService]
    });
  });

  it('should be created', inject([ArchivosJugadoresService], (service: ArchivosJugadoresService) => {
    expect(service).toBeTruthy();
  }));
});
