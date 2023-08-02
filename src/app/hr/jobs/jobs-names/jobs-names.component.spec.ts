import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsNamesComponent } from './jobs-names.component';

describe('JobsNamesComponent', () => {
  let component: JobsNamesComponent;
  let fixture: ComponentFixture<JobsNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
