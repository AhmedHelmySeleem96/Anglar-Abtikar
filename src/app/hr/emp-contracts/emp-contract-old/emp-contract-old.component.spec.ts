import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContractOldComponent } from './emp-contract-old.component';

describe('EmpContractOldComponent', () => {
  let component: EmpContractOldComponent;
  let fixture: ComponentFixture<EmpContractOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpContractOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContractOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
