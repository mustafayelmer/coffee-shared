import {ApiProperty} from "@nestjs/swagger";

export class WeatherWind {
    @ApiProperty({description: 'Speed, #meter/sec', type: Number})
    speed: number;

    @ApiProperty({description: 'Direction, #degrees', type: Number})
    deg: number;

    @ApiProperty({description: 'Gust, #meter/sec', type: Number})
    gust: number;
}