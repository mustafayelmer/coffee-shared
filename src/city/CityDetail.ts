import {CityBase} from "./CityBase";
import {ApiProperty} from "@nestjs/swagger";
import {WeatherRoot} from "../weather/WeatherRoot";
import {WeatherHistoryItem} from "../weather/WeatherHistoryItem";

export class CityDetail extends CityBase {
    @ApiProperty({type: WeatherRoot})
    weather: WeatherRoot;

    @ApiProperty({type: [WeatherHistoryItem]})
    history: Array<WeatherHistoryItem>;
}