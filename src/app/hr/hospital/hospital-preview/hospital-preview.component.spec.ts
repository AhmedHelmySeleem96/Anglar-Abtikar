import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPreviewComponent } from './hospital-preview.component';

describe('HospitalPreviewComponent', () => {
  let component: HospitalPreviewComponent;
  let fixture: ComponentFixture<HospitalPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
