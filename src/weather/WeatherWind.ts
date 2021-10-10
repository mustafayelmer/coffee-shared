import {ApiProperty} from "@nestjs/swagger";

export class WeatherWind {
    @ApiProperty({type: Number})
    speed: number;

    @ApiProperty({type: Number})
    deg: number;
}