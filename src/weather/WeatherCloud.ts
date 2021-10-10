import {ApiProperty} from "@nestjs/swagger";

export class WeatherCloud {
    @ApiProperty({type: Number})
    all: number;
}