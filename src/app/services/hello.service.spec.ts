/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelloService } from './hello.service';

describe('Service: Hello', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloService]
    });
  });

  it('should ...', inject([HelloService], (service: HelloService) => {
    expect(service).toBeTruthy();
  }));
});
