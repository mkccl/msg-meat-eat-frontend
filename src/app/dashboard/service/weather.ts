export class Weather {

    base: string;
    clouds: Clouds;
    coord: Coord;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: Sys;
    timezone: number;
    visibility: number
    weather: WeatherData[];
    wind: Wind;
}

export class Clouds {
    all: number;
    cod: number;
}

export class Coord {
    lat: number;
    lon: number;
}

export class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;

}

export class Sys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export class WeatherData {

    description: string;
    icon: string;
    id: number;
    main: string;

}

export class Wind {
    deg: number;
    speed: number;
}
