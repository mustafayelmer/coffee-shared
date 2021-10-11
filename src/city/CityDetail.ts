import {CityBase} from "./CityBase";
import {ApiProperty} from "@nestjs/swagger";
import {WeatherRoot} from "../weather/WeatherRoot";

export class CityDetail extends CityBase {
    @ApiProperty({description: 'Latest weather', type: WeatherRoot})
    latest: WeatherRoot;

    @ApiProperty({description: 'History for weather', type: [WeatherRoot]})
    history: Array<WeatherRoot>;
}