import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPiezaComponent } from './reg-pieza.component';

describe('RegPiezaComponent', () => {
  let component: RegPiezaComponent;
  let fixture: ComponentFixture<RegPiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
