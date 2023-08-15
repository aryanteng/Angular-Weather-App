export interface WeatherData {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
  wind_kph: number;
  humidity: number;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
}
