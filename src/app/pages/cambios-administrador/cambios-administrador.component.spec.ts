import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosAdministradorComponent } from './cambios-administrador.component';

describe('CambiosAdministradorComponent', () => {
  let component: CambiosAdministradorComponent;
  let fixture: ComponentFixture<CambiosAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiosAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
