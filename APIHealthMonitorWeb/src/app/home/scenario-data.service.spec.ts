import { TestBed } from '@angular/core/testing';

import { ScenarioDataService } from './scenario-data.service';

describe('ScenarioDataService', () => {
  let service: ScenarioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
