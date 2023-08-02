import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCategoriesComponent } from './jobs-categories.component';

describe('JobsCategoriesComponent', () => {
  let component: JobsCategoriesComponent;
  let fixture: ComponentFixture<JobsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
