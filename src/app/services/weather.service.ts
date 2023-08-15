import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    this.http.get(environment.weatherAppBaseUrl, {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', environment.XRapidAPIKey)
        .set('X-RapidAPI-Host', environment.XRapidAPIHost),
      params: new HttpParams().set('q', city),
    });
  }
}
