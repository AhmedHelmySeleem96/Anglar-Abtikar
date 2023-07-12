import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgstructlevelCreateComponent } from './orgstructlevel-create.component';

describe('OrgstructlevelCreateComponent', () => {
  let component: OrgstructlevelCreateComponent;
  let fixture: ComponentFixture<OrgstructlevelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgstructlevelCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgstructlevelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
