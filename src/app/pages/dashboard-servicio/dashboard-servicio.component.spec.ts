import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServicioComponent } from './dashboard-servicio.component';

describe('DashboardServicioComponent', () => {
  let component: DashboardServicioComponent;
  let fixture: ComponentFixture<DashboardServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
