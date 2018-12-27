import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';

describe('WeatherService', () => {
  beforeEach(() =>  TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ WeatherService ]
  }));
  it(
    'should be created',
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    })
  );
});
