import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgstructuresComponent } from './orgstructures.component';

describe('OrgstructuresComponent', () => {
  let component: OrgstructuresComponent;
  let fixture: ComponentFixture<OrgstructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgstructuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgstructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
