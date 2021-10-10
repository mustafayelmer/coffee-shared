import {WeatherRoot} from "./WeatherRoot";
import {ApiProperty} from "@nestjs/swagger";

export class WeatherHistoryItem {
    @ApiProperty({name: '', type: Date})
    time: string | Date;

    @ApiProperty({name: '', type: WeatherRoot})
    weather: WeatherRoot;
}