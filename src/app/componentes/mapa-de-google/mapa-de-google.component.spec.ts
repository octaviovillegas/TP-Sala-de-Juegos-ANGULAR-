import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeGoogleComponent } from './mapa-de-google.component';

describe('MapaDeGoogleComponent', () => {
  let component: MapaDeGoogleComponent;
  let fixture: ComponentFixture<MapaDeGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDeGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDeGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
