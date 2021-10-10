import {ApiProperty} from "@nestjs/swagger";

export class WeatherWind {
    @ApiProperty({name: 'Speed, #meter/sec', type: Number})
    speed: number;

    @ApiProperty({name: 'Direction, #degrees', type: Number})
    deg: number;

    @ApiProperty({name: 'Gust, #meter/sec', type: Number})
    gust: number;
}