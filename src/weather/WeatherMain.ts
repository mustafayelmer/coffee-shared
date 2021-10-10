import {ApiProperty} from "@nestjs/swagger";

export class WeatherMain {
    @ApiProperty({type: Number})
    temp: number;

    @ApiProperty({type: Number})
    feels_like: number;

    @ApiProperty({type: Number})
    temp_min: number;

    @ApiProperty({type: Number})
    temp_max: number;

    @ApiProperty({type: Number})
    pressure: number;

    @ApiProperty({type: Number})
    humidity: number;
}