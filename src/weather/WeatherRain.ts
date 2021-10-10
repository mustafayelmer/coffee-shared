import {ApiProperty} from "@nestjs/swagger";

export class WeatherRain {
    @ApiProperty({name: 'the last 1 hour, #mm', type: Number})
    '1h': number;

    @ApiProperty({name: 'the last 3 hour, #mm', type: Number})
    '3h': number;
}