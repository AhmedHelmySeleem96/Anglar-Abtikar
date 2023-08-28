import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContractsComponent } from './emp-contracts.component';

describe('EmpContractsComponent', () => {
  let component: EmpContractsComponent;
  let fixture: ComponentFixture<EmpContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
