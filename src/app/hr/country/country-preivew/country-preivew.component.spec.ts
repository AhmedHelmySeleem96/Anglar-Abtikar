import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPreivewComponent } from './country-preivew.component';

describe('CountryPreivewComponent', () => {
  let component: CountryPreivewComponent;
  let fixture: ComponentFixture<CountryPreivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryPreivewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPreivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
