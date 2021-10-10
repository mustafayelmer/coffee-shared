import {CityBase} from "./CityBase";
import {ApiProperty} from "@nestjs/swagger";
import {WeatherRoot} from "../weather/WeatherRoot";

export class CityDetail extends CityBase {
    @ApiProperty({type: WeatherRoot})
    latest: WeatherRoot;

    @ApiProperty({type: [WeatherRoot]})
    history: Array<WeatherRoot>;
}