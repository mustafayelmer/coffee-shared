import {WeatherRoot} from "./WeatherRoot";

export interface Weather {
    id: string;
    city: string;
    calculatedAt: Date;
    doc: WeatherRoot;
}