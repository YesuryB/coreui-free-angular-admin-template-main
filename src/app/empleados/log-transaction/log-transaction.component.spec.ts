import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTransactionComponent } from './log-transaction.component';

describe('LogTransactionComponent', () => {
  let component: LogTransactionComponent;
  let fixture: ComponentFixture<LogTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogTransactionComponent]
    });
    fixture = TestBed.createComponent(LogTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
