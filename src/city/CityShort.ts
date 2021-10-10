import {CityBase} from "./CityBase";
import {WeatherMain} from "../weather/WeatherMain";
import {ApiProperty} from "@nestjs/swagger";

export class CityShort extends CityBase {
    @ApiProperty({type: WeatherMain})
    weather: WeatherMain;
}