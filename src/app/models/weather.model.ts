export interface WeatherData {
  location: Location;
  current: Current;
  wind_kph: number;
  humidity: number;
}

export interface Location {
  name: string;
}

export interface Current {
  temp_c: number;
}
