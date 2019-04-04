import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeResultadosComponent } from './listado-de-resultados.component';

describe('ListadoDeResultadosComponent', () => {
  let component: ListadoDeResultadosComponent;
  let fixture: ComponentFixture<ListadoDeResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
