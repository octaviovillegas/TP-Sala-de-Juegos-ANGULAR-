import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresListadoComponent } from './jugadores-listado.component';

describe('JugadoresListadoComponent', () => {
  let component: JugadoresListadoComponent;
  let fixture: ComponentFixture<JugadoresListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
