import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

 it('should display nothing at first',()=>{
  //arrange
  const shared = new SharedService;
  //act
  let count = shared.messages.length;

  //assert
  expect(count).toBe(0);
 })

 it('should push message when addmsg called',()=>{
  //arrange
  const shared = new SharedService;
  //act
  shared.addmsg('hello')
  let count = shared.messages.length;
  //assert
  expect(count).toBe(1);

 })

 it('should clear all messages when it calls',()=>{
  //arrange
  const shared = new SharedService;
  //act
  shared.clear()
  let count = shared.messages.length;
  //assert
  expect(count).toBe(0);
 })
});
