import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from 'src/Weather';
import { map } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.api-ninjas.com/v1/weather?zip=';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather(zipcode: string): Observable<Weather> {
    const url = `${this.apiUrl + zipcode}`;
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);

    return this.http.get<any>(url, {headers}).pipe(
      map((response: any) => {
        return {
          wind_speed: response.wind_speed,
          wind_degrees: response.wind_degrees,
          temp: response.temp,
          humidity: response.humidity,
          sunset: response.sunset,
          min_temp: response.min_temp,
          cloud_pct: response.cloud_pct,
          feels_like: response.feels_like,
          sunrise: response.sunrise,
          max_temp: response.max_temp
        } as Weather;
      })
    );
  }
}
