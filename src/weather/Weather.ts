import {WeatherRoot} from "./WeatherRoot";

export interface Weather {
    id: string;
    city: string;
    calculatedAt: string|Date;
    doc: WeatherRoot;
}