import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElNumeroComponent } from './adivina-el-numero.component';

describe('AdivinaElNumeroComponent', () => {
  let component: AdivinaElNumeroComponent;
  let fixture: ComponentFixture<AdivinaElNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaElNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaElNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
