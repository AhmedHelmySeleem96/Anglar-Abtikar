import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacTypesComponent } from './vac-types.component';

describe('VacTypesComponent', () => {
  let component: VacTypesComponent;
  let fixture: ComponentFixture<VacTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
