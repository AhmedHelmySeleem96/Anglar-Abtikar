import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContractTransactionsComponent } from './emp-contract-transactions.component';

describe('EmpContractTransactionsComponent', () => {
  let component: EmpContractTransactionsComponent;
  let fixture: ComponentFixture<EmpContractTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpContractTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContractTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
