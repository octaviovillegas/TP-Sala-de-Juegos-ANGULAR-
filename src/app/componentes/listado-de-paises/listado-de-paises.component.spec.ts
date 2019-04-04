import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDePaisesComponent } from './listado-de-paises.component';

describe('ListadoDePaisesComponent', () => {
  let component: ListadoDePaisesComponent;
  let fixture: ComponentFixture<ListadoDePaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDePaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
