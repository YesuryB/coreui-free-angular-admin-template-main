import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetailComponent } from './empleado-detail.component';

describe('EmpleadoDetailComponent', () => {
  let component: EmpleadoDetailComponent;
  let fixture: ComponentFixture<EmpleadoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoDetailComponent]
    });
    fixture = TestBed.createComponent(EmpleadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
