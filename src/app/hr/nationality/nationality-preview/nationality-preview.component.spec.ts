import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityPreviewComponent } from './nationality-preview.component';

describe('NationalityPreviewComponent', () => {
  let component: NationalityPreviewComponent;
  let fixture: ComponentFixture<NationalityPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalityPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
