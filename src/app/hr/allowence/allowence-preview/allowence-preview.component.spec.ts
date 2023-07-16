import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowencePreviewComponent } from './allowence-preview.component';

describe('AllowencePreviewComponent', () => {
  let component: AllowencePreviewComponent;
  let fixture: ComponentFixture<AllowencePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowencePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowencePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
