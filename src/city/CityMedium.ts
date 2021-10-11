import {CityBase} from "./CityBase";
import {ApiProperty} from "@nestjs/swagger";
import {WeatherRoot} from "../weather/WeatherRoot";

export class CityMedium extends CityBase {
    @ApiProperty({description: 'Latest weather', type: WeatherRoot})
    weather: WeatherRoot;
}