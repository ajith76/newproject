import { TestBed } from '@angular/core/testing';

import { CheckingService } from './checking.service';
import { SharedService } from './shared.service';

describe('CheckingService', () => {
  let service: CheckingService;
  const shared = new SharedService;
  const checking = new CheckingService(shared);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 it('should add 2 numbers',()=>{
  let result  = checking.add(2,3);
  expect(result).toBe(5)
 })
});
