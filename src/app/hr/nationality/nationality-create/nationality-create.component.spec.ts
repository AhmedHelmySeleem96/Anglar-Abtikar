import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityCreateComponent } from './nationality-create.component';

describe('NationalityCreateComponent', () => {
  let component: NationalityCreateComponent;
  let fixture: ComponentFixture<NationalityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalityCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
