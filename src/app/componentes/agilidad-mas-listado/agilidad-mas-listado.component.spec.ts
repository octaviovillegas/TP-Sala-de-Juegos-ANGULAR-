import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadMasListadoComponent } from './agilidad-mas-listado.component';

describe('AgilidadMasListadoComponent', () => {
  let component: AgilidadMasListadoComponent;
  let fixture: ComponentFixture<AgilidadMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
