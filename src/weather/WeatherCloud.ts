import {ApiProperty} from "@nestjs/swagger";

export class WeatherCloud {
    @ApiProperty({name: 'Cloudiness, #percent', type: Number})
    all: number;
}