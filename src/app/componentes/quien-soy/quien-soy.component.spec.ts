import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienSoyComponent } from './quien-soy.component';

describe('QuienSoyComponent', () => {
  let component: QuienSoyComponent;
  let fixture: ComponentFixture<QuienSoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienSoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienSoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
