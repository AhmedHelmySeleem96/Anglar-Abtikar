import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowenceCreateComponent } from './allowence-create.component';

describe('AllowenceCreateComponent', () => {
  let component: AllowenceCreateComponent;
  let fixture: ComponentFixture<AllowenceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowenceCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowenceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
