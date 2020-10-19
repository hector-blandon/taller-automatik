import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMecanicoComponent } from './registrar-mecanico.component';

describe('RegistrarMecanicoComponent', () => {
  let component: RegistrarMecanicoComponent;
  let fixture: ComponentFixture<RegistrarMecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
