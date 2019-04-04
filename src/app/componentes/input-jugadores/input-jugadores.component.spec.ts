import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJugadoresComponent } from './input-jugadores.component';

describe('InputJugadoresComponent', () => {
  let component: InputJugadoresComponent;
  let fixture: ComponentFixture<InputJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
