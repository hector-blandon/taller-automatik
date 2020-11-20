import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAccionRealizadaComponent } from './reg-accion-realizada.component';

describe('RegAccionRealizadaComponent', () => {
  let component: RegAccionRealizadaComponent;
  let fixture: ComponentFixture<RegAccionRealizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAccionRealizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAccionRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
