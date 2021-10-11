import {ApiProperty} from "@nestjs/swagger";

export class WeatherCloud {
    @ApiProperty({description: 'Cloudiness, #percent', type: Number})
    all: number;
}