import {WeatherRoot} from "./WeatherRoot";
import {ApiProperty} from "@nestjs/swagger";

export class WeatherHistoryItem {
    @ApiProperty({type: Date})
    time: string | Date;

    @ApiProperty({type: WeatherRoot})
    weather: WeatherRoot;
}