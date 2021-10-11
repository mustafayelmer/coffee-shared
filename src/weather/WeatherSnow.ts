import {ApiProperty} from "@nestjs/swagger";

export class WeatherSnow {
    @ApiProperty({description: 'the last 1 hour, #mm', type: Number})
    '1h': number;

    @ApiProperty({description: 'the last 3 hour, #mm', type: Number})
    '3h': number;
}