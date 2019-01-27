import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICurrentWeather } from '../interfaces';
import { map } from 'rxjs/operators';
interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string;
  }];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}

export interface IWeatherService {
  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>;
}


@Injectable()
export class WeatherService implements IWeatherService {
  currentWeather = new BehaviorSubject<ICurrentWeather>({
    city: '--',
    country: '--',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  });

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather> {
    let uriParms = '';
    if (typeof search === 'string') {
      uriParms = `q=${search}`;
    } else {
      uriParms = `zip=${search}`;
    }

    if (country) {
      uriParms = `${uriParms}, ${country}`;
    }

     return this.getCurrentWeatherHelper(uriParms);
  }

  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    const uriParms = `lat=${coords.latitude}&${coords.longitude}`;
    return this.getCurrentWeatherHelper(uriParms);
  }
  private getCurrentWeatherHelper(uriParms: string): Observable<ICurrentWeather> {

    return this.httpClient.get<ICurrentWeatherData> (
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
        `${uriParms}&appid=${environment.appId}`
      ).pipe(
        map(data =>
          this.transformToICurrentWeather(data)
        )
      );
  }
  private transformToICurrentWeather (data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}//openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKevinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    };
  }

  private convertKevinToFahrenheit (kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }
}
