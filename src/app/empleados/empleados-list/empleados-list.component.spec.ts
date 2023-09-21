import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosListComponent } from './empleados-list.component';

describe('EmpleadosListComponent', () => {
  let component: EmpleadosListComponent;
  let fixture: ComponentFixture<EmpleadosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosListComponent]
    });
    fixture = TestBed.createComponent(EmpleadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
