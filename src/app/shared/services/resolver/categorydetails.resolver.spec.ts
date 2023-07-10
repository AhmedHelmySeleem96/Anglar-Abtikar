import { TestBed } from '@angular/core/testing';

import { CategorydetailsResolver } from './categorydetails.resolver';

describe('CategorydetailsResolver', () => {
  let resolver: CategorydetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CategorydetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
