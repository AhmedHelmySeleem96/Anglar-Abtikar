import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgstructuresCreateComponent } from './orgstructures-create.component';

describe('OrgstructuresCreateComponent', () => {
  let component: OrgstructuresCreateComponent;
  let fixture: ComponentFixture<OrgstructuresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgstructuresCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgstructuresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
