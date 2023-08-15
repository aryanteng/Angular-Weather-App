import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData: WeatherData;
  city: string;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeatherData('New Delhi').subscribe({
      next: (data) => {
        console.log(data);
        this.weatherData = data;
      },
    });
  }
  onSubmit() {
    this.weatherService.getWeatherData(this.city).subscribe({
      next: (data) => {
        console.log('SEARCH', data);
        this.weatherData = data;
      },
      error: (error) => {
        alert(error.error.error.message);
      },
    });
  }
}
