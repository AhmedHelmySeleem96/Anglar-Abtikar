import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgstructlevelComponent } from './orgstructlevel.component';

describe('OrgstructlevelComponent', () => {
  let component: OrgstructlevelComponent;
  let fixture: ComponentFixture<OrgstructlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgstructlevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgstructlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
