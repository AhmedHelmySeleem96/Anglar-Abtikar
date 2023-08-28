import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContractNewComponent } from './emp-contract-new.component';

describe('EmpContractNewComponent', () => {
  let component: EmpContractNewComponent;
  let fixture: ComponentFixture<EmpContractNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpContractNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContractNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
