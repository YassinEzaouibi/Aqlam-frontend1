import { TestBed } from '@angular/core/testing';

import { BookCollectionService } from './book.collection.service';

describe('Book.CollectionService', () => {
  let service: BookCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
