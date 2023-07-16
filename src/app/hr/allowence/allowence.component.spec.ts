import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowenceComponent } from './allowence.component';

describe('AllowenceComponent', () => {
  let component: AllowenceComponent;
  let fixture: ComponentFixture<AllowenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
