import {WeatherRoot} from "./WeatherRoot";

export interface Weather {
    id: string;
    city: string;
    doc: WeatherRoot;
}