import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadAritmeticaComponent } from './agilidad-aritmetica.component';

describe('AgilidadAritmeticaComponent', () => {
  let component: AgilidadAritmeticaComponent;
  let fixture: ComponentFixture<AgilidadAritmeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadAritmeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
