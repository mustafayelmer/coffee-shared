import {ApiProperty} from "@nestjs/swagger";

export class WeatherCoordinate {
    @ApiProperty({type: Number})
    lon: number;

    @ApiProperty({type: Number})
    lat: number;
}