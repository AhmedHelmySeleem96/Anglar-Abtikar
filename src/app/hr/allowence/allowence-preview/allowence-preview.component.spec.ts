import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancePreviewComponent } from './allowance-preview.component';

describe('AllowancePreviewComponent', () => {
  let component: AllowancePreviewComponent;
  let fixture: ComponentFixture<AllowancePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowancePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowancePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
