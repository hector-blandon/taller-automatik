import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRepuestoUtilizadoComponent } from './reg-repuesto-utilizado.component';

describe('RegRepuestoUtilizadoComponent', () => {
  let component: RegRepuestoUtilizadoComponent;
  let fixture: ComponentFixture<RegRepuestoUtilizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegRepuestoUtilizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRepuestoUtilizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
