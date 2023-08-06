import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsCreateComponent } from './specializations-create.component';

describe('SpecializationsCreateComponent', () => {
  let component: SpecializationsCreateComponent;
  let fixture: ComponentFixture<SpecializationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
